"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "var(--color-off-white)",
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container-wide"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Background Oversized Brand Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              color: "var(--color-black)",
              margin: 0,
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(120px, 28vw, 450px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.8,
              userSelect: "none",
            }}
          >
            ROSH
          </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            height: "85vh",
            zIndex: 2,
          }}
          className="hero-image-wrapper"
        >
          <Image
            src="/Screenshot_2026-07-10_214620-removebg-preview.png"
            alt="Roshh Fashion - Premium minimal fashion"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center bottom",
            }}
            priority
          />
        </motion.div>

        {/* Top Left Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          style={{
            position: "absolute",
            top: "8%",
            left: "80px",
            zIndex: 3,
          }}
          className="hero-tagline"
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--color-black)",
              letterSpacing: "0.2em",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            FASHION
            <br />
            THAT MOVES
            <br />
            WITH YOU.
          </p>
          <div style={{ width: "30px", height: "1px", background: "var(--color-black)", marginTop: "12px" }}></div>
        </motion.div>

        {/* Bottom Left CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          style={{
            position: "absolute",
            bottom: "8%",
            left: "80px",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="hero-ctas"
        >
          <Link
            href="/products"
            style={{
              background: "var(--color-black)",
              color: "var(--color-white)",
              padding: "12px 24px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "background 250ms ease",
            }}
            onMouseEnter={(e) => (e.target.style.background = "var(--color-charcoal)")}
            onMouseLeave={(e) => (e.target.style.background = "var(--color-black)")}
          >
            SHOP NOW
          </Link>
          <Link
            href="/products"
            style={{
              color: "var(--color-black)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textDecoration: "none",
              textTransform: "uppercase",
              position: "relative",
            }}
            onMouseEnter={(e) => (e.currentTarget.querySelector("div").style.width = "100%")}
            onMouseLeave={(e) => (e.currentTarget.querySelector("div").style.width = "30px")}
          >
            EXPLORE NEW IN
            <div style={{ width: "30px", height: "1px", background: "var(--color-black)", marginTop: "8px", transition: "width 300ms ease" }}></div>
          </Link>
        </motion.div>

        {/* Bottom Right Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            position: "absolute",
            bottom: "8%",
            right: "80px",
            textAlign: "left",
            zIndex: 3,
          }}
          className="hero-badge"
        >
          <p
            style={{
              color: "var(--color-black)",
              margin: 0,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              lineHeight: 1.8,
            }}
          >
            NEW
            <br />
            COLLECTION
            <br />
            2026
          </p>
          <div style={{ width: "30px", height: "1px", background: "var(--color-black)", marginTop: "12px" }}></div>
        </motion.div>
      </div>

      {/* Hero Responsive */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .hero-tagline, .hero-ctas, .hero-badge {
            left: 40px !important;
            right: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-tagline, .hero-ctas, .hero-badge {
            left: 20px !important;
            right: 20px !important;
          }
          .hero-tagline {
            top: 20px !important;
          }
          .hero-ctas {
            bottom: 20px !important;
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-badge {
            bottom: 120px !important;
            right: 20px !important;
            text-align: right;
          }
          .hero-badge p {
            text-align: right;
          }
          .hero-badge div {
            margin-left: auto;
          }
        }
      `}</style>
    </section>
  );
}
