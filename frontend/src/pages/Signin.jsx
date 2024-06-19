import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Footer from "@/components/component/footer";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "@/recoil/atoms/userAtoms";
import { useUserActions } from "@/recoil/actions/userActions";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [user, setUser] = useRecoilState(userState);
  const { signInStart, signInSuccess, signInFailure } = useUserActions();
  const { loading, error: errorMessage, currentUser } = user;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return signInFailure('Please fill all the fields');
    }
    try {
      signInStart();
      const res = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        return signInFailure(data.message);
      }

      if (res.ok) {
        signInSuccess(data);
        navigate("/home");
      }
    } catch (error) {
      signInFailure(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
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
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                onChange={handleChange}
              />
            </div>
            <Button className="relative w-full bg-black text-white" type="submit" disabled={loading}>
              <span>Sign In</span>
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
