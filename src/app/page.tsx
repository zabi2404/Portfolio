"use client";

import Loading from "@/components/loading";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/Pages/home/Header"), { ssr: false });
const HomeSecondSection = dynamic(() => import("@/Pages/home/HomeSecondSection"), { ssr: false });
const HomeThirdSection = dynamic(() => import("@/Pages/home/HomeThirdSection"), { ssr: false });
const Footer = dynamic(() => import("@/Pages/home/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <HomeSecondSection />
      <HomeThirdSection />
      <Footer />
    </>
  );
}
