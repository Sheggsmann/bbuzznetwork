import styles from "@/styles";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${styles.paddingX} bg-[#000] py-16`}>
      <div className={`${styles.boxWidth} mx-auto`}>
        <div className="flex flex-col gap-y-16 md:flex-row justify-between">
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="font-bold text-2xl text-[#ECFF05]">
                BBUZZ Network
              </span>
            </Link>
          </div>

          <div>
            <p className="text-[#808080] text-sm font-bold mb-6">COMPANY</p>
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link
                  href="/about"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#808080] text-sm font-bold mb-6">CONTACT</p>
            <ul className="flex flex-col gap-y-6">
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                hello@bbuzznetwork.com
              </li>
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                <Link
                  href="/"
                  className="font-semibold text-base mr-10 cursor-pointer text-white"
                >
                  www.bbuzznetwork.com
                </Link>
              </li>
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                +234 812 966 4234
              </li>
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                36 TUNJI BELLO STREET, AJAH.
                <br />
                LAGOS, NIGERIA.
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#808080] text-sm font-bold mb-6">ADDRESS</p>
            <ul className="flex flex-col gap-y-6">
              <li className="font-semibold text-base mr-10 cursor-pointer text-white">
                36 TUNJI BELLO STREET, AJAH. <br />
                LAGOS, NIGERIA.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${styles.boxWidth} mx-auto bg-[#808080] h-[0.5px] mt-12`}
      ></div>

      <div className="mx-auto text-center text-[#808080] pt-8">
        <p>© {new Date().getFullYear()} BbuzzNetwork. All rights reserved.</p>
      </div>
    </footer>
  );
}
