'use client'
import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSelection from "./_components/TemplateListSection";

export default function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return <div>
        {/* Search Section */}
        <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

        {/* Template List Section */}
        <TemplateListSelection userSearchInput={userSearchInput}/>
  </div>;
}
