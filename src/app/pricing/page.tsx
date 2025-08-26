"use client";
import CheckoutModal from "@/components/checkout-modal";
import PageHeader from "@/components/header";
import styles from "@/styles";
import React from "react";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "CV & Portfolio Kits",
    for: "Students, Job Seekers, Freelancers",
    price: "$50",
    price_usd: 50,
    features: ["Editable formats (Word, Canva, PDF)"],
  },
  {
    id: 2,
    title: "Business Document Bundle",
    for: "SMEs, Solo Entrepreneurs",
    price: "$75",
    price_usd: 75,
    features: ["Contracts, Proposals, Invoices, NDAs"],
  },
  {
    id: 3,
    title: "Brand Starter Park",
    for: "Creators, Influencers, Startups",
    price: "$100",
    price_usd: 100,
    features: ["Logo Templates, Brand Board, Color Guide"],
  },
  {
    id: 4,
    title: "Digital Launch Kit",
    for: "Coaches, Course Creators",
    price: "$150",
    price_usd: 150,
    features: ["Landing page copy, email series, promo grpahics"],
  },
];

export default function Pricing() {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (item: (typeof items)[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <PageHeader
        title="Pricing"
        description="We have different plans to suit your brand, No too much hassle "
      />

      <section className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="border-1 border-[#E0E3E8] p-4 rounded-lg"
                >
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p className="text-[#808080]">{item.for}</p>
                  <h1 className="text-3xl font-bold my-8">{item.price}</h1>

                  <h1 className="text-lg font-bold">Includes</h1>
                  <p className="text-[#808080]">{item.features.join(" ")}</p>

                  <button
                    onClick={() => handleOrderClick(item)}
                    className="bg-[#ECFF05] hover:bg-[#d7e06f] w-full mt-8 flex flex-row items-center justify-center gap-2 py-3 px-10 md:px-6 cursor-pointer font-bold mx-auto md:mx-0"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedItem && (
        <CheckoutModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          item={selectedItem}
        />
      )}
    </div>
  );
}
