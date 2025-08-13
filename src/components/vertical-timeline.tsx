import React from "react";

const steps = [
  {
    id: "01",
    title: "Browse",
    description:
      "Explore our curated library of templates for work, school, and business. Whether you need a resume, a business plan, or a branding kit, we’ve got you covered.",
  },
  {
    id: "02",
    title: "Purchase",
    description:
      "Checkout using your debit/credit card. Payments are safe, fast, and secure.",
  },
  {
    id: "03",
    title: "Download",
    description:
      "No delays — your files are available for immediate download after payment.",
  },
  {
    id: "04",
    title: "Edit & Use",
    description:
      "Open your template in Word, Canva, Notion, or PDF and customize it to match your style, brand, or project.",
  },
];

export default function VerticalTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto py-16 mt-8">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-green-400"></div>
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => {
          const isLeft = index % 2 !== 0; // alternate
          return (
            <div
              key={step.id}
              className={`relative flex items-center ${
                isLeft ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-6">
                <p className="text-sm font-semibold text-gray-700">{step.id}</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-400 mt-1">{step.description}</p>
              </div>

              {/* Connector dot */}
              <div className="relative z-10 w-4 h-4 bg-green-400 rounded-full border-4 border-white"></div>

              {/* Spacer for the opposite side */}
              <div className="w-1/2"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
