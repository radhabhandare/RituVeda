import React, { useState, useEffect } from "react";
import "../components/UserProfile.css"; // Ensure this path is correct

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    dob: "",
    periodDate: "",
    mobile: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send JWT token
          },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to fetch user details");

        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  // Handle form input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to update user details");

      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      setMessage(error.message || "Failed to update user details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
        <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Age" required />
        <input type="date" name="dob" value={user.dob} onChange={handleChange} required />
        <input type="date" name="periodDate" value={user.periodDate} onChange={handleChange} required />
        <input type="text" name="mobile" value={user.mobile} onChange={handleChange} placeholder="Mobile" required />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Details"}
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
