import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseService";

const SetupConnection: React.FC = () => {
  const [status, setStatus] = useState<"checking" | "success" | "error">(
    "checking"
  );
  const [message, setMessage] = useState<string>("Initializing connection...");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { error } = await supabase.from("profiles").select("id").limit(1);

        if (error) {
          setStatus("error");
          setMessage(`Connection failed: ${error.message}`);
        } else {
          setStatus("success");
          setMessage("Supabase connection established successfully.");
        }
      } catch (err) {
        setStatus("error");
        setMessage("Unexpected error while testing connection.");
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h2>System Setup & Connection</h2>

      {status === "checking" && <p>🔄 {message}</p>}
      {status === "success" && <p>✅ {message}</p>}
      {status === "error" && <p>❌ {message}</p>}

      <small>
        This screen validates backend connectivity and environment readiness.
      </small>
    </div>
  );
};

export default SetupConnection;
