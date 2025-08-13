import PageHeader from "@/components/header";
import React from "react";

const items = [{}];

export default function Pricing() {
  return (
    <div>
      <PageHeader
        title="Pricing"
        description="We have different plans to suit your brand, No too much hassle "
      />
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
}
