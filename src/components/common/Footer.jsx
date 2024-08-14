import React from "react";
import { Link } from "react-router-dom";
import { FooterLink2 } from "../../data/footer-links";
import { memo } from "react";
// Images
import Logo from "../../assets/Logo/logo-Full-Light.png";
// Icons
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbBrandGoogle } from "react-icons/tb";

const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

function Footer() {
  return (
    <footer className="bg-richBlack-800">
      <div className="mx-auto grid w-11/12 max-w-screen-xl grid-cols-2 gap-5 py-8 text-richBlack-400 md:py-12">
        {/* left */}
        
        {/* sub footer */}
        <div className="col-span-2 flex flex-col items-center justify-between gap-3 border-t-[1px] border-richBlack-700 pt-8 md:flex-row">
          <div className="space-x-4">
            {BottomFooter.map((item, idx) => (
              <Link
                key={idx}
                className="cursor-pointer text-sm font-normal"
                to={item.replace(" ", "-").toLowerCase()}
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-sm font-normal">Made with ❤️ Ayush Raj ,Vineet Kumar,Harsh Goyal,Prashant Kumar</p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
