import React, { useState } from "react";
import { User, Mail, Lock, Phone, Loader2 } from "lucide-react";
import "./RegisterForm.css"; // Make sure to include the CSS we updated

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://imblaise073.wixsite.com/sonabackend/_functions/register";

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const { firstName, lastName, email, password, telephone } = form;
    if (!firstName || !lastName || !email || !password || !telephone)
      return "All fields are required.";
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) return "Please enter a valid email address.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    if (!/^[0-9+\-()\s]+$/.test(telephone))
      return "Please enter a valid phone number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const err = validate();
    if (err) {
      setMessage({ text: err, type: "error" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.status === "success") {
        setMessage({ text: data.message || "Registration successful!", type: "success" });
        setForm({ firstName: "", lastName: "", email: "", password: "", telephone: "" });
      } else {
        setMessage({ text: data.message || "Registration failed.", type: "error" });
      }
    } catch (error) {
      console.error("Register error:", error);
      setMessage({
        text: error.message.includes("Failed to fetch")
          ? "Network error or CORS issue. Check backend settings."
          : error.message,
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Left: Registration form */}
      <div className="register-container">
        <h2 className="register-title">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          {/* First and Last Name */}
          <div className="form-row">
            <div className="input-group">
              <User className="icon" />
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="input-group">
              <User className="icon" />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <Mail className="icon" />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>

          {/* Telephone */}
          <div className="input-group">
            <Phone className="icon" />
            <input
              name="telephone"
              type="tel"
              value={form.telephone}
              onChange={handleChange}
              placeholder="Telephone Number"
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <Lock className="icon" />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password (min 6 chars)"
            />
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? <><Loader2 className="spin" /> Registering...</> : "Register"}
          </button>
        </form>

        {/* Message */}
        {message && <div className={`message ${message.type}`}>{message.text}</div>}

        <p className="terms">
          By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>

      {/* Right: Welcome title */}
      <h1 className="welcome-title">
        WELCOME TO UBUMWE DATABASE SYSTEM
      </h1>
    </div>
  );
}
