import PageHeader from "@/components/header";
import React from "react";
import styles from "@/styles";

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We have different plans to suit your brand, No too much hassle "
      />

      <section className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
          <div>
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="flex flex-1/3 border-1 border-[#D1D3D8] rounded-lg p-2">
                <div></div>
                <div>
                  <h1 className="font-bold">Email address</h1>
                  <p className="text-sm">hella@bbuzznetwork.com</p>
                </div>
              </div>

              <div className="flex flex-1/3 border-1 border-[#D1D3D8] rounded-lg p-2">
                <div></div>
                <div>
                  <h1 className="font-bold">Call us</h1>
                  <p className="text-sm">+234 812 966 4234</p>
                </div>
              </div>

              <div className="flex flex-1/3 border-1 border-[#D1D3D8] rounded-lg p-2">
                <div></div>
                <div>
                  <h1 className="font-bold">Location</h1>
                  <p className="text-sm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <form action="/" method="POST" className="mt-12">
            <div className="border-1 border-[#80808080] p-4 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-1 flex-col">
                  <label className="font-semibold">Your Name</label>
                  <input
                    type="text"
                    className="border-b-1 border-[#D1D3D8] p-2 mt-2 outline-none"
                    placeholder="Enter your name"
                  />
                  <label className="font-semibold mt-6">Email Address</label>
                  <input
                    type="text"
                    className="border-b-1 border-[#D1D3D8] p-2 mt-2 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <textarea
                    className="border-b-1 border-[#D1D3D8] p-2 mt-2 outline-none h-full"
                    placeholder="Type your message here"
                  />
                </div>
              </div>
              <input
                type="submit"
                className="bg-[#ECFF05] hover:bg-[#d7e06f] flex flex-row items-center gap-2 py-3 px-10 md:px-6 cursor-pointer font-bold mx-auto md:mx-0 mt-8"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
