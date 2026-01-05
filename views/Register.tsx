import React, { useState } from "react";
import { supabase } from "../services/supabaseService";
import { APP_NAME } from "../constants";

const Register: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }

      const user = data.user;

      if (user) {
        await supabase.from("profiles").insert({
          id: user.id,
          full_name: fullName,
          email: email,
          role: "user",
        });

        setMessage(
          "Registration successful. Please check your email to verify your account."
        );
      }
    } catch (err) {
      setMessage("Unexpected error during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create an Account</h1>
      <p>Join {APP_NAME}</p>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
