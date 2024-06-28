import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {useSetRecoilState} from "recoil";
import Footer from "@/components/component/footer";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/component/theme-provider.jsx"; // Assuming you have a theme provider for dark mode
import { userState } from "@/recoil/atoms/userAtoms.js";
//import { useRecoilState } from "recoil";


export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
 // const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme(); // Get the current theme from your theme provider

  const setUser = useSetRecoilState(userState);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("All fields are required");
    }
   
      // setLoading(true);
      // setErrorMessage(null);
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data =  response.data
      localStorage.setItem('token',data.token)


      setUser({userEmail: email, isLoading: false})
    
  }
  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark:bg-black' : 'bg-white'}`}>
      <div className="flex-grow flex items-center justify-center">
        <div className="mx-auto max-w-md space-y-6 py-12 w-full px-4">
          <div className="space-y-2 text-center">
            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Sign Up</h1>
            <p className={`text-gray-500 ${theme === 'dark' ? 'dark:text-gray-400' : 'dark:text-gray-700'}`}>
              Create your account to get started.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="john"
                required
                type="text"
                onChange={handleChange}
                className={`w-full ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-gray-50' : 'bg-white'}`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john@example.com"
                required
                type="email"
                onChange={handleChange}
                className={`w-full ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-gray-50' : 'bg-white'}`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                onChange={handleChange}
                className={`w-full ${theme === 'dark' ? 'dark:bg-gray-800 dark:text-gray-50' : 'bg-white'}`}
              />
            </div>
            <Button
              className={`relative w-full hover:bg-black hover:text-white ${theme === 'dark' ? 'bg-black text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
              type="submit"
              disabled={loading}
            >
              <span>Sign Up</span>
              {loading && (
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-full"
                  style={{
                    animation: "spin 1s linear infinite",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "transparent",
                    borderTopColor: "currentColor",
                  }}
                />
              )}
            </Button>
            {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
          </form>
          <Button
            className={`w-full ${theme === 'dark' ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
            type="button"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Already Have An Account? Sign In
          </Button>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
