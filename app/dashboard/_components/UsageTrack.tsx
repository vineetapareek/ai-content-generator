"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react"; // Removed useState, using context state
import { eq } from "drizzle-orm";
import { useTotalUsage } from "@/app/(context)/TotalUsageContext";

export default function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useTotalUsage();

  useEffect(() => {
    if (user) {
      GetData();
    }
  }, [user]);

  const GetData = async () => {
    console.log("Fetching data for user:", user?.primaryEmailAddress?.emailAddress);
    const result = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress ?? ""));
    GetTotalUsage(result);
  };

  const getWordCount = (text: string | undefined) => {
    if (!text || text.trim() === "") return 0;
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const GetTotalUsage = (result: typeof AIOutput.$inferSelect[]) => {
    console.log("Processing result:", result);
    let total = 0;
    result.forEach((element) => {
      total += getWordCount(element.aiResponse);
    });
    console.log("Calculated initial total:", total);
    setTotalUsage(total); // Update the context with the initial total
  };

  return (
    <div className="m-5">
      <div className="bg-black text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalUsage / 10000) * 100}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Words used</h2>
      </div>
      <Button variant="secondary" className="w-full my-3">
        Upgrade
      </Button>
    </div>
  );
}