


import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Footer from "@/components/component/footer";
import { useNavigate } from "react-router-dom";



import { useTheme } from "@/components/component/theme-provider.jsx";
import { useClerk } from '@clerk/clerk-react';

export default function SignIn() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { user } = useClerk();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await user.signIn.create({
        identifier: email,
        password: password,
  });
   
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className={`flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white`}>
      <div className="flex-grow flex items-center justify-center">
        <div className="mx-auto max-w-md space-y-6 py-12 w-full px-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign In to get started.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john@example.com"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="dark:bg-gray-800 dark:text-white"
              />
            </div>
            <Button className="relative w-full bg-black text-white hover:bg-black hover:text-white" type="submit" disabled={!email || !password}>
              {!error && <span>Sign In</span>}
              {error && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="spinner" />
                </div>
              )}
            </Button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
          <Button
            className="w-full bg-white text-black hover:bg-black hover:text-white"
            type="button"
            onClick={() => navigate("/signup")}
          >
            Don't Have An Account? Sign Up
          </Button>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
