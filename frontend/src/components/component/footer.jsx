import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
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
  )
}
