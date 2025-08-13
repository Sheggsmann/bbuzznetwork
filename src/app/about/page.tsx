import PageHeader from "@/components/header";
import Image from "next/image";
import global from "@/assets/global.svg";
import instant from "@/assets/instant.svg";
import unique from "@/assets/unique.svg";
import customize from "@/assets/customize.svg";
import styles from "@/styles";
import React from "react";

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Us"
        description="BBUZZ Network is Nigeria’s go-to marketplace for smart digital templates and productivity tools. We help individuals, freelancers, and small businesses get ahead faster with ready-made resources for resumes, business, branding, school, and sales. From Canva designs to Notion planners and business documents, Templyt delivers quality digital tools — instantly."
      />

      <section className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row ">
            <div className="flex flex-1 flex-col">
              <h1 className="font-bold text-[24px]">
                Why choose <span className="text-[#B0C300]">BBUZZ Network</span>
              </h1>
              <p className="mt-4">
                We’re not just another template shop — we’re your shortcut to
                getting work done smarter, faster, and with style.
              </p>
            </div>
            <div className="flex flex-2">
              <div className="grid grid-cols md:grid-cols-2 gap-2">
                <div className="bg-[#FAFAFA] p-4 rounded-md">
                  <div className="w-[40px] h-[40px] p-2 rounded-md bg-white mb-2">
                    <Image src={unique} alt="unique" />
                  </div>
                  <h2 className="font-semibold text-lg">Unique</h2>
                  <p>
                    We are not just another template-shop we are your shortcut
                    to getting work done smarter, faster and with style
                  </p>
                </div>

                <div className="bg-[#FAFAFA] p-4 rounded-md">
                  <div className="w-[40px] h-[40px] p-2 rounded-md bg-white mb-2">
                    <Image src={global} alt="globally relevant" />
                  </div>
                  <h2 className="font-semibold text-lg">
                    Africa-Focused, Globally Relevant
                  </h2>
                  <p>
                    Our templates are designed with the African market in mind
                    but meet international standards, so your work shines
                    anywhere.
                  </p>
                </div>

                <div className="bg-[#FAFAFA] p-4 rounded-md">
                  <div className="w-[40px] h-[40px] p-2 rounded-md bg-white mb-2">
                    <Image src={instant} alt="instant img" />
                  </div>
                  <h2 className="font-semibold text-lg">
                    Instant Access, Everytime
                  </h2>
                  <p>
                    No waiting, As soon as you complete payment, your files are
                    ready to download and start using
                  </p>
                </div>

                <div className="bg-[#FAFAFA] p-4 rounded-md">
                  <div className="w-[40px] h-[40px] p-2 rounded-md bg-white mb-2">
                    <Image src={customize} alt="customizable" />
                  </div>
                  <h2 className="font-semibold text-lg">Customizable</h2>
                  <p>
                    Every template works with popular tools like canva,
                    Microsoft, Notion and other popular tools that you can think
                    of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
