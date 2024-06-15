import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-white text-gray-900">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Elevate Your Tech Blogging Presence</h1>
          <p className="text-gray-400 md:text-xl">
           Where Ideas Merge, Stories Evolve
          </p>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 border-t border-gray-800 items-center px-6">
        <p className="text-xs text-gray-500">© 2024 Fusion by Sivasish. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-gray-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-gray-300" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
