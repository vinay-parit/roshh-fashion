"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "SHOP", href: "/products" },
    { label: "ABOUT", href: "#" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          background: "var(--color-black)",
          color: "var(--color-white)",
          padding: "8px 0",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Free delivery on orders above ₹999</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href="#"
              style={{
                color: "var(--color-white)",
                textDecoration: "none",
                opacity: 0.8,
                transition: "opacity 250ms",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
            >
              Track Order
            </Link>
            <Link
              href="#"
              style={{
                color: "var(--color-white)",
                textDecoration: "none",
                opacity: 0.8,
                transition: "opacity 250ms",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
            >
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "var(--color-white)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition: "all 300ms ease-in-out",
          borderBottom: scrolled ? "none" : "var(--border-hairline)",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 80px",
          }}
        >
          {/* Left Nav Links */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center",
            }}
            className="desktop-nav-links"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-label"
                style={{
                  color: "var(--color-black)",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--color-stone)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--color-black)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "var(--color-black)",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              ROSHH
            </span>
          </Link>

          {/* Right Icons */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-black)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: 0,
              }}
              className="desktop-nav-links"
            >
              <Search size={20} strokeWidth={1.5} />
              <span className="text-label" style={{ fontSize: "11px" }}>
                SEARCH
              </span>
            </button>

            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-black)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: 0,
                position: "relative",
              }}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="text-label" style={{ fontSize: "11px" }}>
                CART (0)
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-black)",
                padding: 0,
                display: "none",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                borderTop: "var(--border-hairline)",
              }}
            >
              <div
                style={{
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-label"
                    style={{
                      color: "var(--color-black)",
                      textDecoration: "none",
                      fontSize: "14px",
                      letterSpacing: "0.12em",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="divider" />
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--color-black)",
                      padding: 0,
                    }}
                  >
                    <Search size={18} strokeWidth={1.5} />
                    <span className="text-label">SEARCH</span>
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--color-black)",
                      padding: 0,
                    }}
                  >
                    <ShoppingBag size={18} strokeWidth={1.5} />
                    <span className="text-label">CART</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .container-wide {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
