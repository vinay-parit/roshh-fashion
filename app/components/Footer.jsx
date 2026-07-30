"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  ArrowUp,
  Globe,
  Check,
} from "lucide-react";

const InstagramIcon = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shopLinks = [
    { label: "Men", href: "/products?category=men" },
    { label: "Women", href: "/products?category=women" },
    { label: "Kids", href: "/products?category=kids" },
    { label: "New Arrivals", href: "/products" },
    { label: "Bestsellers", href: "/products" },
    { label: "Limited Drops", href: "/products" },
  ];

  const helpLinks = [
    { label: "Track Order", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Shipping & Delivery", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Support", href: "#" },
  ];

  const aboutLinks = [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Editorial Journal", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
    { label: "X / Twitter", href: "https://twitter.com", Icon: TwitterIcon },
    { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  ];

  return (
    <footer
      style={{
        background: "var(--color-black)",
        color: "var(--color-white)",
        paddingTop: "96px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-wide">
        {/* Newsletter & Concierge Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "48px",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            marginBottom: "64px",
            alignItems: "center",
          }}
          className="footer-top-grid"
        >
          {/* Newsletter Box */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-whatsapp)",
                  display: "inline-block",
                }}
              />
              <span
                className="text-label"
                style={{
                  color: "var(--color-mid-gray)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                }}
              >
                JOIN THE CLUB
              </span>
            </div>
            <h3
              style={{
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                marginBottom: "12px",
              }}
            >
              Subscribe for exclusive drops & 10% off.
            </h3>
            <p
              style={{
                color: "var(--color-mid-gray)",
                fontSize: "14px",
                maxWidth: "480px",
                marginBottom: "24px",
              }}
            >
              Receive early access to seasonal lookbooks, private sales, and new collection launches directly to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              style={{
                display: "flex",
                maxWidth: "440px",
                gap: "12px",
                position: "relative",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "var(--radius-full)",
                  padding: "16px 24px",
                  color: "var(--color-white)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 250ms, background 250ms",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--color-white)";
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              />
              <button
                type="submit"
                style={{
                  background: "var(--color-white)",
                  color: "var(--color-black)",
                  border: "none",
                  borderRadius: "var(--radius-full)",
                  padding: "0 28px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "transform 250ms, background 250ms",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.background = "var(--color-off-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "var(--color-white)";
                }}
              >
                {subscribed ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Check size={16} /> Subscribed
                  </span>
                ) : (
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    Join <ArrowRight size={14} />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* WhatsApp Concierge Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    position: "relative",
                    display: "flex",
                    height: "10px",
                    width: "10px",
                  }}
                >
                  <span
                    style={{
                      animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                      position: "absolute",
                      display: "inline-flex",
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-whatsapp)",
                      opacity: 0.75,
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      borderRadius: "50%",
                      height: "10px",
                      width: "10px",
                      backgroundColor: "var(--color-whatsapp)",
                    }}
                  />
                </span>
                <span
                  className="text-label"
                  style={{ color: "var(--color-white)", fontSize: "11px" }}
                >
                  PERSONAL CONCIERGE
                </span>
              </div>
              <span style={{ fontSize: "12px", color: "var(--color-stone)" }}>
                Online now
              </span>
            </div>

            <p style={{ color: "var(--color-mid-gray)", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
              Need styling advice or assistance with sizing? Connect directly with our fashion consultants via WhatsApp.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                marginTop: "8px",
                width: "100%",
                padding: "16px 24px",
                fontSize: "11px",
              }}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              CHAT WITH CONCIERGE
            </a>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "80px",
          }}
          className="footer-links-grid"
        >
          {/* Column 1: Brand Info */}
          <div>
            <Link
              href="/"
              style={{
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "var(--color-white)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              ROSHH
            </Link>
            <p
              style={{
                color: "var(--color-stone)",
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "280px",
              }}
            >
              Architectural luxury essentials crafted for modern movement. Designed with precision, built for longevity.
            </p>

            {/* Region Selector Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "12px",
                color: "var(--color-mid-gray)",
                cursor: "pointer",
              }}
            >
              <Globe size={14} />
              <span>India (INR ₹)</span>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "11px",
                letterSpacing: "0.18em",
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
                      color: "var(--color-stone)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 200ms ease, transform 200ms ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "var(--color-white)";
                      e.target.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "var(--color-stone)";
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Client Services */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "11px",
                letterSpacing: "0.18em",
              }}
            >
              CLIENT CARE
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {helpLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "14px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--color-stone)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 200ms ease, transform 200ms ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "var(--color-white)";
                      e.target.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "var(--color-stone)";
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Editorial */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "11px",
                letterSpacing: "0.18em",
              }}
            >
              COMPANY
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {aboutLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "14px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--color-stone)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 200ms ease, transform 200ms ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "var(--color-white)";
                      e.target.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "var(--color-stone)";
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Social & Connect */}
          <div>
            <h4
              className="text-label"
              style={{
                color: "var(--color-white)",
                marginBottom: "24px",
                fontSize: "11px",
                letterSpacing: "0.18em",
              }}
            >
              SOCIAL
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {socialLinks.map((social) => {
                const IconComponent = social.Icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--color-stone)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 200ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-stone)")}
                  >
                    <IconComponent size={16} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Big Editorial Logo Watermark */}
        <div
          style={{
            userSelect: "none",
            pointerEvents: "none",
            textAlign: "center",
            lineHeight: 0.8,
            overflow: "hidden",
            margin: "0 -80px",
            padding: "20px 0",
          }}
        >
          <span
            style={{
              fontSize: "clamp(80px, 16vw, 240px)",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "rgba(255, 255, 255, 0.03)",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            ROSHH
          </span>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "var(--color-stone)",
              fontSize: "12px",
              margin: 0,
            }}
          >
            © 2026 ROSHH Fashion. All rights reserved.
          </p>

          {/* Legal Links */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  style={{
                    color: "var(--color-stone)",
                    textDecoration: "none",
                    fontSize: "12px",
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--color-white)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--color-stone)")}
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "var(--radius-full)",
              color: "var(--color-mid-gray)",
              padding: "10px 20px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "all 250ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-white)";
              e.currentTarget.style.color = "var(--color-white)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.color = "var(--color-mid-gray)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-links-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
