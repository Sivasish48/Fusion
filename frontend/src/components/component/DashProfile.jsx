import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRecoilValue } from 'recoil';
import { userState } from '@/recoil/atoms/userAtoms';

export default function DashProfile() {
  const { currentUser } = useRecoilValue(userState);

 console.log('currentUser:', currentUser);

  return (
    <div className="w-full max-w-2xl mx-auto dark:bg-dark dark:text-white">
      <Card className="dark:bg-dark">
        <div className="flex items-center justify-center p-6 border-b dark:border-gray-700">
          <Avatar className="h-24 w-24 dark:bg-gray-800">
            <AvatarFallback>USER</AvatarFallback>
          </Avatar>
        </div>
        <CardContent className="p-6 space-y-6 dark:bg-dark">
          <div className="text-center">
            <div className="text-3xl font-bold"></div>
            <div className="text-sm text-gray-500">{currentUser.email}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="username">Change Username</Label>
              <Input
                id="username"
                // placeholder={currentUser.name}
                defaultValue={currentUser?.name || ''}
                className="dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Change Email</Label>
              <Input
                id="email"
                type="email"
                 defaultValue={currentUser?.email || ''}
                //  placeholder={currentUser.email}
                className="dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Change Password</Label>
            <Input
              id="password"
              type="password"
              // defaultValue={currentUser?.password || ''}
               placeholder="********"
              className="dark:bg-gray-800 dark:text-white"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 p-6 sm:flex-row sm:justify-end dark:bg-dark">
          <Button variant="outline" className="dark:border-gray-700 dark:text-white">Save Changes</Button>
          <Button variant="destructive" className="dark:bg-red-700 dark:text-white">Delete Account</Button>
          <Button className="dark:bg-gray-800 dark:text-white">Sign Out</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
