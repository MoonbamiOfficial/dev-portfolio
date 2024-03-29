import { Metadata } from "next";
import dynamic from "next/dynamic";
import StayTuned from "@components/ui/StayTuned";

const Footer = dynamic(() => import("@components/footer/Footer"));

export const metadata: Metadata = {
  title: "More",
};

const MorePage = () => {
  return (
    <>
      <StayTuned src={`${process.env.API_MUSIC_AVATAR}`} />
      <Footer />
    </>
  );
};

export default MorePage;
