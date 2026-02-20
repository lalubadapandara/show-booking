import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-gray-400 pt-10 pb-6">

      {/* Top Divider with Logo */}
      <div className="flex items-center justify-center gap-6 px-6">
        <div className="flex-1 h-[1px] bg-gray-600"></div>

        <div className="text-2xl font-light tracking-wide text-white">
          Show<span className="bg-red-600 text-white px-2 py-1 rounded-md font-semibold">Book</span>show
        </div>

        <div className="flex-1 h-[1px] bg-gray-600"></div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-8">
        <SocialIcon icon={<FaFacebookF />} />
        <SocialIcon icon={<FaXTwitter />} />
        <SocialIcon icon={<FaInstagram />} />
        <SocialIcon icon={<FaYoutube />} />
        <SocialIcon icon={<FaPinterestP />} />
        <SocialIcon icon={<FaLinkedinIn />} />
      </div>

      {/* Copyright Text */}
      <div className="max-w-4xl mx-auto text-center text-sm mt-8 px-6 leading-6">
        <p>
          Copyright 2026 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
        <p className="mt-2">
          The content and images used on this site are copyright protected and copyrights vest with the respective owners.
          The usage of the content and images on this website is intended to promote the works and no endorsement of the artist
          shall be implied. Unauthorized use is prohibited and punishable by law.
        </p>
      </div>

    </footer>
  );
}

/* Reusable Social Icon Component */
function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center 
                    text-white hover:bg-red-600 transition cursor-pointer">
      {icon}
    </div>
  );
}