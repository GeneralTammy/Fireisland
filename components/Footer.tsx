import Link from "next/link";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Seal } from "./Branding";

const Footer = () => (
  <footer className="bg-sand">
    {/* Top Image CTA */}
    <div className="relative h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
      <img
        src="/007-417687-639OceanBreezeWalk-104_11495723 (1).jpg"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
        alt="Beach Harbor"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="font-hand text-4xl sm:text-5xl mb-3 italic">
          Call or text us
        </h2>
        <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-widest">
          631-570-8942
        </h3>
      </div>
    </div>

    {/* Bottom Links Section */}
    <div className="bg-beach/90 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: I want to... + Office 1 */}
          <div className="lg:col-span-3">
            <h4
              className="font-hand text-3xl italic mb-6 font-bold"
              style={{ color: "#185B89" }}
            >
              I want to...
            </h4>
            <ul className="space-y-3">
              {[
                "BUY A HOME",
                "SELL YOUR HOME",
                "RENT A HOME",
                "MANAGEMENT SERVICES",
                "INQUIRE",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="font-semibold text-sm tracking-widest transition-colors duration-300 hover:!text-sunset block"
                    style={{ color: "#185B89" }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-xs space-y-1">
              <p className="font-semibold" style={{ color: "#185B89" }}>
                Office 1 Address
              </p>
              <p style={{ color: "#185B89" }}>1234 Street Avenue</p>
              <p style={{ color: "#185B89" }}>City, State, Zip</p>
            </div>
          </div>

          {/* Column 2: I need more info... + Office 2 */}
          <div className="lg:col-span-3">
            <h4
              className="font-hand text-3xl italic mb-6 font-bold"
              style={{ color: "#185B89" }}
            >
              I need more info...
            </h4>
            <ul className="space-y-3">
              {["COMMUNITY", "ABOUT", "EVENTS", "JOBS"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="font-semibold text-sm tracking-widest transition-colors duration-300 hover:!text-sunset block"
                    style={{ color: "#185B89" }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-xs space-y-1">
              <p className="font-semibold" style={{ color: "#185B89" }}>
                Office 2 Address
              </p>
              <p style={{ color: "#185B89" }}>1234 Street Avenue</p>
              <p style={{ color: "#185B89" }}>City, State, Zip</p>
            </div>
          </div>

          {/* Center Logo - Hidden on small screens, centered on larger */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
            <img
              src="/Logo_ExpandedOval_BlueGingham-1000px.png"
              alt="Company Logo"
              className="w-52 h-auto"
            />
          </div>

          {/* Column 4: Stay Connected + Subscribe */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-12">
              {/* Stay Connected with Icons */}
              <div>
                <h4
                  className="font-hand text-3xl italic mb-6 font-bold"
                  style={{ color: "#185B89" }}
                >
                  Stay Connected
                </h4>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="#"
                    className="flex items-center gap-3 font-semibold text-sm tracking-widest transition-colors duration-300 hover:!text-sunset"
                    style={{ color: "#185B89" }}
                  >
                    <Instagram size={20} />
                    <span>INSTAGRAM</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 font-semibold text-sm tracking-widest transition-colors duration-300 hover:!text-sunset"
                    style={{ color: "#185B89" }}
                  >
                    <Facebook size={20} />
                    <span>FACEBOOK</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 font-semibold text-sm tracking-widest transition-colors duration-300 hover:!text-sunset"
                    style={{ color: "#185B89" }}
                  >
                    <Youtube size={20} />
                    <span>YOUTUBE</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 font-semibold text-sm tracking-widest transition-colors duration-300 hover:!text-sunset"
                    style={{ color: "#185B89" }}
                  >
                    <Linkedin size={20} />
                    <span>LINKEDIN</span>
                  </Link>
                </div>
              </div>

              {/* Subscribe Form */}
              <div>
                <h4
                  className="font-hand text-3xl italic mb-6 font-bold"
                  style={{ color: "#185B89" }}
                >
                  Don't miss out!
                </h4>
                <p
                  className="font-bold text-xs tracking-widest uppercase mb-4"
                  style={{ color: "#185B89" }}
                >
                  SUBSCRIBE:
                </p>
                <form className="space-y-3 max-w-sm lg:max-w-none">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white p-3.5 text-sm focus:outline-none rounded-md font-medium transition-all duration-300 focus:border-sunset focus:ring-1 focus:ring-sunset placeholder:text-gray-400"
                    style={{ color: "#185B89", border: "1px solid #e2e8f0" }}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white p-3.5 text-sm focus:outline-none rounded-md font-medium transition-all duration-300 focus:border-sunset focus:ring-1 focus:ring-sunset placeholder:text-gray-400"
                    style={{ color: "#185B89", border: "1px solid #e2e8f0" }}
                  />
                  <button
                    type="submit"
                    className="w-full bg-sunset text-white py-3.5 font-bold uppercase tracking-widest text-sm hover:bg-sunset/90 transition-all duration-300 rounded-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Logo - Shown only on small & medium screens */}
        <div className="flex lg:hidden justify-center mt-16 mb-8">
          <img
            src="/Logo_ExpandedOval_BlueGingham-1000px.png"
            alt="Company Logo"
            className="w-44 h-auto"
          />
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="bg-ocean py-6 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/70 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Luxury Fire Island Homes. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
