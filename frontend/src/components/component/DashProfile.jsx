// DashProfile.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRecoilValue } from 'recoil';
import { userState } from '@/recoil/atoms/userAtoms';
import { useUserActions } from "@/recoil/actions/userActions.js"

export default function DashProfile() {
  const { currentUser } = useRecoilValue(userState);
  const [formData, setFormData] = useState({});

  const { updateStart, updateSuccess, updateFailure } = useUserActions();

  console.log('currentUser:', currentUser);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(formData).length === 0) {
      return;
    }

    try {
      updateStart();
      const res = await fetch(`http://localhost:4000/user/update/${currentUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        updateFailure(data.message);
      } else {
        updateSuccess(data);
      }
    } catch (error) {
      updateFailure(error.message);
    }
  };

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
          <Button variant="outline" className="dark:border-gray-700 dark:text-white" onClick={handleOnSubmit}>Save Changes</Button>
          <Button variant="destructive" className="dark:bg-red-700 dark:text-white">Delete Account</Button>
          <Button className="dark:bg-gray-800 dark:text-white">Sign Out</Button>
        </CardFooter>
      </Card>
    </div>
  );
}





// import React, { useState } from 'react';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { useRecoilValue } from 'recoil';
// import { userState } from '@/recoil/atoms/userAtoms';
// import { useUserActions } from "@/recoil/actions/userActions.js"

// export default function DashProfile() {
//   const { currentUser } = useRecoilValue(userState);
//   const [formData, setFormData] = useState({});

//   const { updateStart, updateSuccess, updateFailure } = useUserActions();

//   console.log('currentUser:', currentUser);

//   const handleOnChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   console.log(formData);

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
    
//     if (Object.keys(formData).length === 0) {
//       return;
//     }

//     try {
//       updateStart();
//       const res = await fetch(`http://localhost:4000/user/update/${currentUser.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       console.log('response data:', data);

//       if (!res.ok) {
//         updateFailure(data.message);
//       } else {
//         updateSuccess(data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       updateFailure(error.message);
//     }
//   };

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




// import React, { useState } from 'react';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { useRecoilValue } from 'recoil';
// import { userState } from '@/recoil/atoms/userAtoms';
// import { useUserActions } from "@/recoil/actions/userActions.js"


// export default function DashProfile() {
//   const { currentUser } = useRecoilValue(userState);
//   const [formData, setFormData] = useState({});

//   const { updateStart, updateSuccess, updateFailure } = useUserActions();

//   console.log('currentUser:', currentUser);
//   console.log('currentUserid:', currentUser.id);

//   const handleOnChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   console.log(formData);

//   // const handleOnSubmit = async (e) => {
//   //   e.preventDefault();
    
  //   // if (Object.keys(formData).length === 0) {
  //   //   return;
  //   // }

  //   try {
  //     updateStart();
  //     const res = await fetch(`http://localhost:4000/api/user/update/${currentUser.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     //const text = await res.json()
  //     //console.log('raw response text:', text);

  //     const data = await res.json();

  //     if (!res.ok) {  
  //       updateFailure(data.message);
  //     } else {
  //       updateSuccess(data);
  //     }
  //   } catch (error) {
     
  //     updateFailure(error.message);
  //   }
  // };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (Object.keys(formData).length === 0) {
  //     return;
  //   }
  
  //   try {
  //     updateStart();
  //     const res = await fetch(`http://localhost:4000/user/update/${currentUser.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //       credentials: "include", // Ensure cookies are included in the request
  //     });
  //     console.log("response:", res);
  //     const data = await res.json();
  
      
       
  //       if (!res.ok) {
  //         updateFailure(data.message);
  //       } else {
  //         updateSuccess(data);
  //       }
  //     } catch (error) {
  //       console.error('Error parsing JSON:', error);
  //       updateFailure('Unexpected response format');
  //     }
  //   }
  // };

  // return (
  //   <div className="w-full max-w-2xl mx-auto dark:bg-dark dark:text-white">
  //     <Card className="dark:bg-dark">
  //       <div className="flex items-center justify-center p-6 border-b dark:border-gray-700">
  //         <Avatar className="h-24 w-24 dark:bg-gray-800">
  //           <AvatarFallback>USER</AvatarFallback>
  //         </Avatar>
  //       </div>
  //       <form onSubmit={handleOnSubmit}>
  //         <CardContent className="p-6 space-y-6 dark:bg-dark">
  //           <div className="text-center">
  //             <div className="text-3xl font-bold">{currentUser?.name || 'User'}</div>
  //             <div className="text-sm text-gray-500">{currentUser?.email || 'user@example.com'}</div>
  //           </div>
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //             <div className="space-y-2">
  //               <Label htmlFor="username">Change Username</Label>
  //               <Input
  //                 id="username"
  //                 defaultValue={currentUser?.name || ''}
  //                 className="dark:bg-gray-800 dark:text-white"
  //                 onChange={handleOnChange}
  //               />
  //             </div>
  //             <div className="space-y-2">
  //               <Label htmlFor="email">Change Email</Label>
  //               <Input
  //                 id="email"
  //                 type="email"
  //                 defaultValue={currentUser?.email || ''}
  //                 className="dark:bg-gray-800 dark:text-white"
  //                 onChange={handleOnChange}
  //               />
  //             </div>
  //           </div>
  //           <div className="space-y-2">
  //             <Label htmlFor="password">Change Password</Label>
  //             <Input
  //               id="password"
  //               type="password"
  //               placeholder="********"
  //               className="dark:bg-gray-800 dark:text-white"
  //               onChange={handleOnChange}
  //             />
  //           </div>
  //         </CardContent>
  //         <CardFooter className="flex flex-col gap-2 p-6 sm:flex-row sm:justify-end dark:bg-dark">
  //           <Button variant="outline" className="dark:border-gray-700 dark:text-white" type="submit">Save Changes</Button>
  //           <Button variant="destructive" className="dark:bg-red-700 dark:text-white">Delete Account</Button>
  //           <Button className="dark:bg-gray-800 dark:text-white">Sign Out</Button>
  //         </CardFooter>
  //       </form>
  //     </Card>
  //   </div>
  // );

