import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function DashProfile() {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Card>
        <div className="flex items-center justify-center p-6 border-b">
          <Avatar className="h-24 w-24">
            <AvatarFallback>USER</AvatarFallback>
          </Avatar>
        </div>
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold">Jared Palmer</div>
            <div className="text-sm text-gray-500">@jaredpalmer</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="username">Change Username</Label>
              <Input id="username" defaultValue="Jared Palmer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Change Email</Label>
              <Input id="email" type="email" defaultValue="jared@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Change Password</Label>
            <Input id="password" type="password" defaultValue="" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end p-6">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
