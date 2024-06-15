import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import DarkModeLogo from "./dark-mode-logo"

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6">
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
            <span className="sr-only">Fusion Inc</span>
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
      <div className="flex items-center">
        <Link className="mr-6 hidden lg:flex items-center" to="/">
          <Logo />
          <span className="sr-only">Fusion Inc</span>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full lg:space-x-4">
        <div className="hidden lg:flex space-x-4">
          <Link
            className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            to="#">
            Home
          </Link>
          <Link
            className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            to="#">
           Projects
          </Link>
          <Link
            className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            to="#">
           About
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
      <Link to="#" 
       className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
          Signup
        </Link>
        <DarkModeLogo />
      </div>
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
      <span className="text-2xl font-extrabold text-black" >FUSION</span>
    </div>
  )
}

function ChevronRightIcon(props) {
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
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
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
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
