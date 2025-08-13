import styles from "@/styles";
import Image from "next/image";
import arrowRight from "@/assets/arrow-right.svg";
import landingImg from "@/assets/landing.jpg";
import ww1 from "@/assets/ww1.jpg";
import ww2 from "@/assets/ww2.jpg";
import global from "@/assets/global.svg";
import instant from "@/assets/instant.svg";
import unique from "@/assets/unique.svg";
import customize from "@/assets/customize.svg";
import VerticalTimeline from "@/components/vertical-timeline";
import star from "@/assets/star.svg";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative">
        <div
          className={`flex md:flex-row flex-col min-h-[80vh] md:min-h-[85vh]`}
        >
          <div className={`${styles.paddingY} w-full md:w-[50%]`}></div>
          <div className="hidden md:flex flex-1 w-[50%]">
            <Image
              src={landingImg}
              alt="Landing"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>

        <div
          className={`absolute top-[50%] transform -translate-y-6/12 md:transform md:-translate-y-6/12 w-full text-center md:text-left`}
        >
          <div className={`${styles.boxWidth} mx-auto`}>
            <div className="max-w-full md:max-w-[50%] px-6 md:px-0 md:pr-16">
              <h1 className="font-bold md:text-[40px] text-[24px]">
                &quot;Ready-Made Templates to <br />
                Help You Work Smarter&quot;
              </h1>
              <p className="text-[#4E4E4E] py-8 leading-7 md:leading-10 text-[16px] md:text-[18px]">
                BBUZZ Network is Nigeria&apos;s go-to marketplace for smart
                digital templates and productivity tools. We help individuals,
                freelancers, and small businesses get ahead faster with
                ready-made resources for resumes, business, branding, school,
                and sales. From Canva designs to Notion planners and business
                documents, Templyt delivers quality digital tools — instantly.
              </p>
              <button className="bg-[#ECFF05] hover:bg-[#d7e06f] flex flex-row items-center gap-2 py-3 px-10 md:px-6 cursor-pointer font-bold mx-auto md:mx-0">
                View Pricing{" "}
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  className="w-[15px]"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className={` bg-[#FFFFEB] ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
          <h1 className="text-[24px] md:text-[30px] font-bold text-center">
            What we do?
          </h1>
          <p className="text-center text-[#4E4E4E]">
            We create ready-to-use digital templates and tools that simplify
            work, boost productivity, and help individuals and businesses
            achieve more in less time. From resumes to branding kits, our
            resources are designed to deliver instant value and professional
            results.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-12">
            <div className="w-full md:w-[50%] bg-white rounded-md p-4">
              <div className="w-full h-[400px]">
                <Image
                  src={ww1}
                  alt="What we do 1"
                  className="w-full h-[100%] object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <div className="text-[#B0C300] border-[0.5px] border-[#B0C300] px-6 py-3 w-[120px]">
                  Individuals
                </div>
                <ul className="px-4">
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Ideal for students, freelancers, job seekers, and creators
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    CV & Cover Letter templates
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Study planners and Notion trackers
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Goal planners, budget templates, and habit trackers
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Freelance proposal and invoice kits
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-[50%] bg-white rounded-md p-4">
              <div className="w-full h-[400px]">
                <Image
                  src={ww2}
                  alt="What we do 1"
                  className="w-full h-[100%] object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <div className="text-[#B0C300] border-[0.5px] border-[#B0C300] px-6 py-3 w-[120px]">
                  Business
                </div>
                <ul className="px-4">
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Tailored for SMEs, startups, coaches, and creators.
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Business plan and pitch deck templates
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Logo kits, brand guidelines, social media templates
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    Content calendars and email copy packs
                  </li>
                  <li className="text-[#4E4E4E] font-semibold mt-2 list-disc">
                    · Digital launch bundles for product and service rollouts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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

      {/* HOW IT WORKS */}
      <section className={`${styles.paddingX} bg-[#FAFAFA]`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
          <h1 className="text-[24px] md:text-[30px] font-bold text-center">
            How it works
          </h1>
          <p className="text-center text-[#4E4E4E]">
            From browsing to a ready-to-use template in minutes — our process is
            quick, simple, and designed to get you working faster.
          </p>

          <VerticalTimeline />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={`${styles.paddingX} bg-[#fff]`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
          <h1 className="text-[24px] md:text-[30px] font-bold text-center">
            Testimonials
          </h1>
          <p className="text-center text-[#4E4E4E]">
            Real stories from students, freelancers, and business owners who
            turned our templates into success.
          </p>

          <div className="mt-12 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 min-h-[150px] bg-white shadow-md">
                <div className="flex flex-row items-center gap-2">
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                </div>
                <p className="mt-2">
                  &quot;I bought the CV & Portfolio Kit and landed three
                  interviews within a week. The design was clean, professional,
                  and easy to edit. Templyt made me stand out instantly!&quot;
                </p>
                <div className="mt-3">
                  <p className="font-semibold">Chidera Okeke</p>
                  <p className="text-[#4E4E4E] text-sm">Job Seeker</p>
                </div>
              </div>

              <div className="p-4 min-h-[150px] bg-white shadow-md">
                <div className="flex flex-row items-center gap-2">
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                </div>
                <p className="mt-2">
                  &quot;The Brand Starter Pack saved us weeks of work. We had a
                  logo, color palette, and social media templates ready in a
                  day. Our launch looked so professional that clients thought
                  we’d hired a full design team.&quot;
                </p>
                <div className="mt-3">
                  <p className="font-semibold">Aisha M</p>
                  <p className="text-[#4E4E4E] text-sm">Startup Founder</p>
                </div>
              </div>

              <div className="p-4 min-h-[150px] bg-white shadow-md">
                <div className="flex flex-row items-center gap-2">
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                  <Image src={star} alt="star" className="w-[20px]" />
                </div>
                <p className="mt-2">
                  &quot;Templyt’s Business Document Bundle has been a
                  game-changer for my freelance work. Sending polished proposals
                  and contracts has helped me close more clients — and get paid
                  faster.&quot;
                </p>
                <div className="mt-3">
                  <p className="font-semibold">David K</p>
                  <p className="text-[#4E4E4E] text-sm">
                    Freelance Graphic Designer
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
