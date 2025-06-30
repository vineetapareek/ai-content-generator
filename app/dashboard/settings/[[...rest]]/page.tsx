import { UserProfile } from "@clerk/nextjs";

export default function Settings() {
  return (
    <div className="flex items-center justify-center h-full">
       <UserProfile/>
    </div>
  )
}

