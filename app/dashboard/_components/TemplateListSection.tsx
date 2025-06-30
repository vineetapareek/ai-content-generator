import Templates from "@/app/data/Templates";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export default function TemplateListSection({ userSearchInput }: { userSearchInput?: string }) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    if (userSearchInput?.trim()) {
      const filtered = Templates.filter((t) =>
        t.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filtered);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-10">
      {templateList.map((item) => (
        <TemplateCard key={item.slug} {...item} />
      ))}
      {templateList.length === 0 && (
        <p className="col-span-full text-center text-sm text-gray-500">
          No templates match “{userSearchInput}”.
        </p>
      )}
    </div>
  );
}
