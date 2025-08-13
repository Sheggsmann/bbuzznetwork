"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    price: string;
    for: string;
    price_usd: number;
    id: number;
    features: string[];
  };
  onSubmit?: (formData: FormData) => void;
}

interface PaystackConfig {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
  text: string;
  onSuccess: (reference: unknown) => void;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  item,
}: //   onSubmit,
CheckoutModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // onSubmit(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const paystackConfig: PaystackConfig = {
    reference: new Date().getTime().toString(),
    email: `${formData.email}`,
    amount: item ? item.price_usd * 155000 : 0,
    publicKey: `pk_live_c75234e7afb1e8c399b382c8b6208fe978b50ee1`,
    text: "Complete Payment",
    onSuccess: (reference) => {
      console.log("Payment Successful: ", reference);
      alert("Payment Successful! Reference: " + reference);
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#FAFAFAFA] rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-center">Checkout</h2>

        <div className="mb-4 bg-white rounded-lg p-4">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-[#808080] text-sm">{item.for}</p>
          <h1 className="text-2xl font-bold my-2">{item.price}</h1>

          <h1 className="text-md font-bold">Includes</h1>
          <p className="text-[#808080] text-sm">{item.features.join(" ")}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 bg-white rounded-lg p-4">
            <div className="flex flex-col">
              <label className="font-semibold">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                className="border-b-1 border-[#D1D3D8] p-2 mt-2 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
                className="border-b-1 border-[#D1D3D8] p-2 mt-2 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Your Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border-b-1 border-[#D1D3D8] p-2 mt-2 outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <PaystackButton
                {...paystackConfig}
                className="bg-[#ECFF05] hover:bg-[#d7e06f] py-2 px-4 rounded font-bold flex-1 cursor-pointer"
              />
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded font-bold flex-1 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
