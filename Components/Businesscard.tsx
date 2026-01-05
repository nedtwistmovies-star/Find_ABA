import React from "react";

interface BusinessCardProps {
  businessName: string;
  category: string;
  location: string;
  status?: "Active" | "Pending" | "Suspended";
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  businessName,
  category,
  location,
  status = "Pending",
}) => {
  return (
    <div>
      <h4>{businessName}</h4>
      <p>{category}</p>
      <p>{location}</p>
      <strong>Status: {status}</strong>
    </div>
  );
};

export default BusinessCard;
