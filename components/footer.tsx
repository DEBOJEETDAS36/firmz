import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      id="footer"
      className="section-placeholder border-t border-gray-200"
    >
      <div className="flex flex-col items-center gap-3 py-8">
        <h3 className="text-xl font-semibold">
          Law & Accountancy Firm
        </h3>

        <p className="text-sm text-gray-500 text-center max-w-md">
          Providing trusted legal and financial advisory services with
          professionalism, integrity, and expertise.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-5 text-xl mt-2">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-2">
          © 2026 Law & Accountancy Firm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}