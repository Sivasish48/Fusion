import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { UserIcon, LogOutIcon, MoveVerticalIcon } from './custom-icons.jsx'; // Assuming these icons are defined in a separate file

export default function DashSidebar({ theme }) {
  return (
    <div className={`flex h-screen w-full flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-background text-black'}`}>
      <header className="flex h-14 items-center justify-between border-b bg-card px-4 md:hidden">
        <div className="font-medium">Menu</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoveVerticalIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <UserIcon className="h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <LogOutIcon className="h-4 w-4" />
                Sign Out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-1">
        <nav className="hidden h-full w-60 flex-col border-r bg-card px-4 py-6 md:flex">
          <Link href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
            <UserIcon className="h-4 w-4" />
            Profile
          </Link>
          <Link href="#" className="mt-auto flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" prefetch={false}>
            <LogOutIcon className="h-4 w-4" />
            Sign Out
          </Link>
        </nav>
        
      </div>
    </div>
  );
}
