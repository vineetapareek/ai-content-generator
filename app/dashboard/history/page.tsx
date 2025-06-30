"use client";
import { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq, desc } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import {
  FaBlog,
  FaComment,
  FaShoppingBag,
  FaEnvelope,
  FaHandPointUp,
  FaYoutube,
  FaVideo,
  FaLinkedinIn,
  FaExclamationTriangle,
  FaQuestion,
  FaComments,
  FaTwitter,
} from "react-icons/fa";

export default function HistoryPage() {
  const { user } = useUser();
  const [history, setHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      try {
        setIsLoading(true);
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(desc(AIOutput.createdAt));
        console.log(
          "Fetched history:",
          result.map((item) => ({
            id: item.id,
            templateSlug: item.templateSlug,
            aiResponse: item.aiResponse,
            createdAt: item.createdAt,
          }))
        );
        setHistory(result);
      } catch (error) {
        console.error("Error fetching history:", error);
        toast.error("Failed to fetch history. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text || "");
    toast.success("Response copied to clipboard!");
  };

  const formatDate = (date: string | Date | undefined | null) => {
    if (!date || date.toString().trim() === "") return "Date unavailable";
    const parsed = moment(date, ["DD/MM/YYYY", moment.ISO_8601], true);
    return parsed.isValid() ? parsed.format("DD/MM/YYYY") : "Date unavailable";
  };

  const getWordCount = (text: string | undefined) => {
    if (!text || text.trim() === "") return 0;
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const getIconForTemplate = (templateSlug: string | undefined) => {
    const slug = templateSlug?.toLowerCase().replaceAll("-", " ") || "default";
    switch (slug) {
      case "blog title":
        return <FaBlog className="h-5 w-5" />;
      case "social media caption":
        return <FaComment className="h-5 w-5" />;
      case "product description":
        return <FaShoppingBag className="h-5 w-5" />;
      case "email subject line":
        return <FaEnvelope className="h-5 w-5" />;
      case "ad copy":
        return <FaHandPointUp className="h-5 w-5" />;
      case "youtube title & description":
        return <FaYoutube className="h-5 w-5" />;
      case "instagram reel ideas":
        return <FaVideo className="h-5 w-5" />;
      case "linkedin post idea":
        return <FaLinkedinIn className="h-5 w-5" />;
      case "pitch deck copy":
        return <FaExclamationTriangle className="h-5 w-5" />;
      case "faqs generator":
        return <FaQuestion className="h-5 w-5" />;
      case "brand slogan":
        return <FaComments className="h-5 w-5" />;
      case "tweet generator":
        return <FaTwitter className="h-5 w-5" />;
      default:
        return <FaBlog className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading history...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Your AI History
            </h2>
            <p className="text-gray-600 mb-6">
              Browse and manage your previously generated AI content
            </p>
            {history.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No history found. Generate some AI content to see it here!
              </div>
            ) : (
              <div className="space-y-6">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-100 text-gray-800 rounded-full h-10 w-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors duration-200">
                          {getIconForTemplate(item.templateSlug)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 capitalize">
                            {item.templateSlug?.replaceAll("-", " ") || "Untitled"}
                          </h3>
                        </div>
                      </div>
                      {item.aiResponse && (
                        <div className="text-sm text-gray-600 mt-2 sm:mt-0">
                          {getWordCount(item.aiResponse)} words
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-wrap">
                      {item.aiResponse || (
                        <span className="text-gray-400 italic">
                          No AI response available.
                        </span>
                      )}
                    </div>

                    {item.aiResponse && (
                      <div className="mt-3 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>navigator.clipboard.writeText(item.aiResponse)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Response
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}