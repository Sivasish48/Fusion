import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import DarkModeLogo from "./dark-mode-logo";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/atoms/userAtoms";
import { ProfileLogo } from "./profile-logo";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser } = useRecoilValue(userState);

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6">
      {/* Left section with brand logo */}
      <div className="flex items-center space-x-4">
        <Link className="flex items-center" to="/">
          <Logo />
          <span className="sr-only">Fusion Inc</span>
        </Link>
      </div>
      
      {/* Middle section with navigation buttons */}
      <div className="flex items-center justify-center w-full lg:space-x-4">
        <div className="hidden lg:flex space-x-4">
          <Link
            className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            to="/project"
          >
            Projects
          </Link>
          <Link
            className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
      
      {/* Right section with profile and dark mode logos */}
      <div className="flex items-center space-x-4">
        {currentUser ? (
          <div className="flex items-center space-x-4 ml-4">
            
            <ProfileLogo />
          </div>
        ) : (
          <Link
            to="/signup"
            className="whitespace-nowrap group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          >
            Sign Up
          </Link>
        )}
        <div className="flex items-center ">
          <DarkModeLogo />
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="#" className="flex items-center">
            <Logo />
            <span className="sr-only" onClick={() => navigate("/")}>
              Fusion Inc
            </span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-xl font-bold" to="#">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-xl font-bold" to="#">
              Projects
            </Link>
            <Link className="flex w-full items-center py-2 text-xl font-bold" to="#">
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-600"
      >
        <path d="M12 2l2 7h-4l2-7zM2 12h7v4H2zM17 12h7v4h-7zM12 12l-2 7h4l-2-7z" />
      </svg>
      <span className="text-2xl font-extrabold text-black">FUSION</span>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
