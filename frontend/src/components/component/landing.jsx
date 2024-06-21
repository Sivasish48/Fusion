import { TextGenerateEffect } from "../ui/text-generate-effect.jsx";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/component/theme-provider.jsx";

export default function Landing() {
  const { theme } = useTheme();
  const words = `Elevate Your Tech Blogging Presence`;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-3xl px-4 md:px-0 text-center -mt-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <TextGenerateEffect words={words} />
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
            Where Ideas Merge, Stories Evolve
          </p>
        </div>
      </div>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 border-t border-gray-800 dark:border-gray-700 items-center px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Fusion by Sivasish. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-500" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
