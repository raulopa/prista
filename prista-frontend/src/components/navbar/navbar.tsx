import { Search } from "lucide-react";
import logo from "../../assets/prista_logo.png";
import { Input } from "../ui/input";
import { ModeToggle } from "../mode-toggle/mode-toggle";

export default function NavBar() {
  return (
    <div className="w-full shadow-md p-2 flex justify-between items-center z-50 relative">
      <div className="flex items-center w-1/10">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="w-8/10 flex justify-end">
        <div className="relative w-1/5">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="Search..." className="pl-8" />
        </div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
