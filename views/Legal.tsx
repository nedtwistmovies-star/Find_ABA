import React from "react";
import Layout from "../Components/Layout";
import { LEGAL, APP_NAME } from "../constants";

const Legal: React.FC = () => {
  return (
    <Layout title="Legal & Compliance">
      <h2>Legal Information</h2>
      <p>
        This page outlines the legal terms, privacy principles, and usage
        conditions governing <strong>{APP_NAME}</strong>.
      </p>

      <section>
        <h3>Terms of Use</h3>
        <p>
          By accessing or using this platform, you agree to comply with all
          applicable laws and regulations. Unauthorized use, abuse of services,
          or misrepresentation is strictly prohibited.
        </p>
      </section>

      <section>
        <h3>Privacy Policy</h3>
        <p>
          We respect user privacy. Personal data is collected only where
          necessary to provide services and is handled in accordance with
          applicable data protection laws.
        </p>
      </section>

      <section>
        <h3>AI Usage Disclosure</h3>
        <p>
          This platform uses artificial intelligence to assist users. AI outputs
          are informational and should not be considered legal, financial, or
          professional advice.
        </p>
      </section>

      <section>
        <h3>Liability Limitation</h3>
        <p>
          {LEGAL.COMPANY_NAME} shall not be liable for losses arising from
          reliance on information provided through the platform.
        </p>
      </section>

      <section>
        <h3>Jurisdiction</h3>
        <p>
          These terms are governed by the laws of the{" "}
          {LEGAL.JURISDICTION}.
        </p>
      </section>

      <footer style={{ marginTop: "2rem" }}>
        <small>
          Last updated: {LEGAL.LAST_UPDATED} <br />
          Contact: {LEGAL.CONTACT_EMAIL}
        </small>
      </footer>
    </Layout>
  );
};

export default Legal;
