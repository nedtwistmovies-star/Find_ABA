import React from "react";
import Layout from "../Components/Layout";
import BusinessCard from "../Components/BusinessCard";

const MerchantPortal: React.FC = () => {
  return (
    <Layout title="Merchant Portal">
      <h2>Welcome to Your Merchant Portal</h2>
      <p>
        Manage your business presence, connect with customers, and grow within
        the FindAba ecosystem.
      </p>

      <section>
        <h3>Your Business</h3>

        <BusinessCard
          businessName="Sample Business"
          category="Artisan & Manufacturing"
          location="Aba, Abia State"
          status="Active"
        />
      </section>

      <section>
        <h3>Quick Actions</h3>
        <ul>
          <li>Create or update listings</li>
          <li>View customer requests</li>
          <li>Manage logistics & delivery</li>
          <li>Upgrade visibility</li>
        </ul>
      </section>
    </Layout>
  );
};

export default MerchantPortal;
