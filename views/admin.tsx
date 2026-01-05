import React from "react";
import { APP_NAME } from "../constants";

const Admin: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>
        Welcome to the administration panel for <strong>{APP_NAME}</strong>.
      </p>

      <section>
        <h3>System Controls</h3>
        <ul>
          <li>User Management (coming soon)</li>
          <li>AI Configuration (coming soon)</li>
          <li>City Data & Listings (coming soon)</li>
          <li>Audit Logs (coming soon)</li>
        </ul>
      </section>

      <section>
        <h3>Status</h3>
        <p>System operational. No critical alerts.</p>
      </section>
    </div>
  );
};

export default Admin;
