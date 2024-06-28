// import React, { useState } from 'react';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import {  useSetRecoilState } from 'recoil';
// import { userState } from '@/recoil/atoms/userAtoms';
// //import { useUserActions } from "@/recoil/actions/userActions.js"

// export default function DashProfile() {
//   let { userId } = useParams();
//   const [formData, setFormData] = useState({});
//    const [userDetails,setUser] = useSetRecoilState(userState);
//   // const { updateStart, updateSuccess, updateFailure } = useUserActions();

//   const handleOnChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
    
//     // if (Object.keys(formData).length === 0) {
//     //   return;
//     // }

 
   
//       const response =  await fetch(`http://localhost:4000/api/user/update/${userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem("token")

//         },
//         body: JSON.stringify(formData),
//         // credentials: "include", // Ensure cookies are included in the request
//       });
//       const data = await response.json();
//       let updatedUser = {
//         ...userDetails,
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         username: formData.username,
//       }
//       setUser(updatedUser)
  
//     }
      

//   return (
//     <div className="w-full max-w-2xl mx-auto dark:bg-dark dark:text-white">
//       <Card className="dark:bg-dark">
//         <div className="flex items-center justify-center p-6 border-b dark:border-gray-700">
//           <Avatar className="h-24 w-24 dark:bg-gray-800">
//             <AvatarFallback>USER</AvatarFallback>
//           </Avatar>
//         </div>
//         <form onSubmit={handleOnSubmit}>
//           <CardContent className="p-6 space-y-6 dark:bg-dark">
//             <div className="text-center">
//               <div className="text-3xl font-bold">{currentUser?.name || 'User'}</div>
//               <div className="text-sm text-gray-500">{currentUser?.email || 'user@example.com'}</div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="username">Change Username</Label>
//                 <Input
//                   id="username"
//                   defaultValue={currentUser?.name || ''}
//                   className="dark:bg-gray-800 dark:text-white"
//                   onChange={handleOnChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Change Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   defaultValue={currentUser?.email || ''}
//                   className="dark:bg-gray-800 dark:text-white"
//                   onChange={handleOnChange}
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Change Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="********"
//                 className="dark:bg-gray-800 dark:text-white"
//                 onChange={handleOnChange}
//               />
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col gap-2 p-6 sm:flex-row sm:justify-end dark:bg-dark">
//             <Button variant="outline" className="dark:border-gray-700 dark:text-white" type="submit">Save Changes</Button>
//             <Button variant="destructive" className="dark:bg-red-700 dark:text-white">Delete Account</Button>
//             <Button className="dark:bg-gray-800 dark:text-white">Sign Out</Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '@/recoil/atoms/userAtoms';

export default function DashProfile() {
  const { userId } = useParams();
  const currentUser = useRecoilValue(userState).currentUser;
  const [formData, setFormData] = useState({});
  const setUser = useSetRecoilState(userState);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:4000/api/user/update/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setUser((prev) => ({
      ...prev,
      currentUser: {
        ...prev.currentUser,
        ...data,
      }
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto dark:bg-dark dark:text-white">
      <Card className="dark:bg-dark">
        <div className="flex items-center justify-center p-6 border-b dark:border-gray-700">
          <Avatar className="h-24 w-24 dark:bg-gray-800">
            <AvatarFallback>USER</AvatarFallback>
          </Avatar>
        </div>
        <form onSubmit={handleOnSubmit}>
          <CardContent className="p-6 space-y-6 dark:bg-dark">
            <div className="text-center">
              <div className="text-3xl font-bold">{currentUser?.name || 'User'}</div>
              <div className="text-sm text-gray-500">{currentUser?.email || 'user@example.com'}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="username">Change Username</Label>
                <Input
                  id="username"
                  defaultValue={currentUser?.name || ''}
                  className="dark:bg-gray-800 dark:text-white"
                  onChange={handleOnChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Change Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={currentUser?.email || ''}
                  className="dark:bg-gray-800 dark:text-white"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Change Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                className="dark:bg-gray-800 dark:text-white"
                onChange={handleOnChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 p-6 sm:flex-row sm:justify-end dark:bg-dark">
            <Button variant="outline" className="dark:border-gray-700 dark:text-white" type="submit">Save Changes</Button>
            <Button variant="destructive" className="dark:bg-red-700 dark:text-white">Delete Account</Button>
            <Button className="dark:bg-gray-800 dark:text-white">Sign Out</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
