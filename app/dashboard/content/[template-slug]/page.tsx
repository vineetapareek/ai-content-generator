"use client";
import Templates from "@/app/data/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { useContext, useState } from "react";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import { useTotalUsage } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/router";

interface Props {
  params: {
    "template-slug": string;
  };
}

export default function CreateNewContent(props: Props) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useTotalUsage();

  const getWordCount = (text: string | undefined) => {
    if (!text || text.trim() === "") return 0;
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      alert("Usage limit of 10,000 words reached. Please upgrade your plan to generate more content.");
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true);
    try {
      if (!selectedTemplate) {
        toast.error("Selected template not found.");
        return;
      }
      const SelectedPrompt = selectedTemplate.aiPrompt;
      const formDataString = typeof formData === "object" ? JSON.stringify(formData) : String(formData);
      if (!formDataString || formDataString.trim() === "") {
        toast.error("Invalid form data provided.");
        return;
      }
      const FinalAIPrompt = formDataString + " " + SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);
      const aiResponseText = result?.response.text();
      if (!aiResponseText) {
        toast.error("Failed to generate AI content. Please try again.");
        return;
      }
      setAiOutput(aiResponseText);
      await SaveInDb(formDataString, selectedTemplate.slug, aiResponseText);
    } catch (error) {
      console.error("Error generating AI content:", error);
      toast.error("An error occurred while generating content.");
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: string, slug: string, aiResponse: string) => {
    try {
      if (!formData || formData.trim() === "") {
        console.error("Invalid or empty formData");
        toast.error("Failed to save: Invalid form data.");
        return;
      }
      if (!slug || slug.trim() === "") {
        console.error("Invalid or empty templateSlug");
        toast.error("Failed to save: Invalid template slug.");
        return;
      }
      if (!aiResponse || aiResponse.trim() === "") {
        console.error("Invalid or empty aiResponse");
        toast.error("Failed to save: No AI response generated.");
        return;
      }

      const result = await db.insert(AIOutput).values({
        formData,
        templateSlug: slug,
        aiResponse,
        createdBy: user?.primaryEmailAddress?.emailAddress ?? "anonymous",
      });
      console.log("Saved to DB with aiResponse:", aiResponse);
      console.log("Current totalUsage before update:", totalUsage);

      // Update total usage with the word count of the new response
      const newWordCount = getWordCount(aiResponse);
      console.log("New word count:", newWordCount);
      setTotalUsage(totalUsage + newWordCount);
      console.log("Updated totalUsage:", totalUsage + newWordCount);
    } catch (error) {
      console.error("Error saving to DB:", error);
      toast.error("Failed to save content to database.");
    }
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}