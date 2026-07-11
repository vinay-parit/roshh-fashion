"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { label: "Men", href: "/products?category=men" },
    { label: "Women", href: "/products?category=women" },
    { label: "Kids", href: "/products?category=kids" },
    { label: "New Arrivals", href: "/products" },
    { label: "Bestsellers", href: "/products" },
  ];

  const helpLinks = [
    { label: "Track Order", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  const aboutLinks = [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "var(--color-charcoal)",
        color: "var(--color-white)",
        paddingTop: "80px",
        paddingBottom: "32px",
      }}
    >
      <div className="container-wide">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "48px",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              ROSHH
            </h3>
            <p
              style={{
                color: "var(--color-mid-gray)",
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Fashion that moves with you. Premium essentials for the modern
              wardrobe.
            </p>
            <a
              href="https://wa.me/919999999999"
              className="btn-whatsapp"
              style={{
                padding: "14px 28px",
                fontSize: "11px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              BOOK ON WHATSAPP
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "12px",
              }}
            >
              SHOP
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {shopLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "14px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--color-mid-gray)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 250ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--color-white)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--color-mid-gray)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "12px",
              }}
            >
              CUSTOMER SERVICE
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {helpLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "14px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--color-mid-gray)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 250ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--color-white)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--color-mid-gray)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "12px",
              }}
            >
              ABOUT
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {aboutLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "14px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--color-mid-gray)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 250ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--color-white)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--color-mid-gray)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "var(--color-stone)",
              fontSize: "12px",
              margin: 0,
            }}
          >
            © 2025 Roshh Fashion. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  style={{
                    color: "var(--color-stone)",
                    textDecoration: "none",
                    fontSize: "12px",
                    transition: "color 250ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--color-white)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--color-stone)")
                  }
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Footer Responsive */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
