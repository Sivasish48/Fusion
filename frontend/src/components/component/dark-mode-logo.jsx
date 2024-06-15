/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/oGrs4BWJCTg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"

export default function DarkModeLogo() {
  return (
    (<Button
      className="rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-sm transition-colors hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gradient-to-br dark:from-gray-50 dark:to-gray-200 dark:shadow-none dark:hover:bg-gradient-to-br dark:hover:from-gray-100 dark:hover:to-gray-300 dark:focus:ring-gray-300"
      size="sm"
      variant="ghost">
      <MoonIcon className="h-5 w-5 text-gray-50 dark:text-gray-900" />
    </Button>)
  );
}

function MoonIcon(props) {
  return (
    (<svg
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>)
  );
}