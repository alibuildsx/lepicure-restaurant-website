import Link from "next/link";
import {
  footerHours,
  footerContact,
  footerSocial,
  footerLegal,
  navLinks,
} from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[rgba(166,124,82,0.15)]">
      {/* Main footer grid */}
      <div className="container-luxury pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-[24px] font-semibold text-[#f5f5dc] hover:text-[#a67c52] transition-colors duration-300 block mb-4"
            >
              L&apos;Épicure
            </Link>
            <p className="text-[#8e9192] text-[14px] leading-relaxed mb-6 max-w-[220px]">
              Two Michelin stars. Thirty-seven years of culinary devotion. 12 Rue de la Paix, Paris.
            </p>
            <div className="flex gap-4">
              {footerSocial.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-[#8e9192] hover:text-[#a67c52] transition-colors duration-300"
                  style={{ fontSize: "10px" }}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="label-caps text-[#f5f5dc] mb-6" style={{ fontSize: "10px" }}>
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#8e9192] hover:text-[#c9c6c5] transition-colors duration-300 text-[14px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reservation"
                  className="text-[#a67c52] hover:text-[#c49a6c] transition-colors duration-300 text-[14px]"
                >
                  Reserve a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="label-caps text-[#f5f5dc] mb-6" style={{ fontSize: "10px" }}>
              Hours
            </h3>
            <ul className="space-y-3">
              {footerHours.map((h) => (
                <li key={h.day} className="flex flex-col gap-0.5">
                  <span className="text-[#8e9192] text-[12px]">{h.day}</span>
                  <span
                    className={`text-[14px] font-medium ${
                      h.hours === "Closed" ? "text-[#444748]" : "text-[#c9c6c5]"
                    }`}
                  >
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-caps text-[#f5f5dc] mb-6" style={{ fontSize: "10px" }}>
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div>
                {footerContact.address.map((line) => (
                  <p key={line} className="text-[#8e9192] text-[14px]">
                    {line}
                  </p>
                ))}
              </div>
              <div>
                <a
                  href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                  className="text-[#c9c6c5] hover:text-[#a67c52] transition-colors duration-300 text-[14px] block mb-1"
                >
                  {footerContact.phone}
                </a>
                <a
                  href={`mailto:${footerContact.email}`}
                  className="text-[#c9c6c5] hover:text-[#a67c52] transition-colors duration-300 text-[14px] block"
                >
                  {footerContact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bronze divider */}
        <div className="mt-12 pt-8 border-t border-[rgba(166,124,82,0.12)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#444748] text-[12px]">
            © {new Date().getFullYear()} L&apos;Épicure. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLegal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#444748] hover:text-[#8e9192] transition-colors duration-300 text-[12px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
