import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/supabaseService";
import { UserProfile } from "../types";

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    getUserProfile("demo-user-id").then(({ data }) => {
      if (data) setProfile(data);
    });
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>{profile.fullName}</h2>
      <p>{profile.email}</p>
    </div>
  );
};

export default Profile;
