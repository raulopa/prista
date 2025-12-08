import { FolderKanban } from "lucide-react";

export default function SideBar() {
  return (
    <div className="w-full shadow-md p-2 flex justify-between items-start">
      <div className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md w-100 transition-all ">
        <FolderKanban className="w-10 h-4" />
        <span className="ml-2 font-semibold">Projects</span>
      </div>
    </div>
  );
}
