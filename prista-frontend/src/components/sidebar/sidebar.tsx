import { FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="w-full shadow-md p-2 flex justify-between items-start">
      <Link className="text-black w-full" to={`/`}>
        <div
          className="
  w-full flex items-center cursor-pointer 
  text-black dark:text-white
  bg-white dark:bg-neutral-800
  hover:bg-neutral-200 dark:hover:bg-neutral-700
  p-2 rounded-md transition-all
"
        >
          <FolderKanban className="w-10 h-4" />
          <span className="ml-2 font-semibold">Projects</span>
        </div>
      </Link>
    </div>
  );
}
