"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TrustBadges from "./TrustBadges";

export default function NewSeasonBanner() {
  return (
    <section
      style={{
        background: "var(--color-off-white)",
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Centered Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src="/premium_photo-1738692732633-c91be7a070a2.avif"
          alt="New Season Collection - Roshh Fashion"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </motion.div>

      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {/* Text Content on the Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          style={{
            padding: "var(--space-8) var(--space-7)",
            maxWidth: "400px",
          }}
          className="banner-content"
        >
          <p
            className="text-label"
            style={{
              color: "var(--color-white)",
              marginBottom: "var(--space-3)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontWeight: 600,
            }}
          >
            NEW SEASON
          </p>
          <h2
            className="text-h1"
            style={{
              color: "var(--color-white)",
              margin: "0 0 var(--space-4) 0",
              fontWeight: 800,
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            NEW
            <br />
            VIBES
          </h2>
          <p
            className="text-body"
            style={{
              color: "var(--color-white)",
              marginBottom: "var(--space-7)",
              lineHeight: 1.7,
            }}
          >
            Discover everything new and now. Curated pieces for the season
            ahead.
          </p>
          <Link
            href="/products"
            style={{
              display: "inline-block",
              background: "var(--color-white)",
              color: "var(--color-black)",
              padding: "16px 32px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "background 250ms ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--color-light-gray)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--color-white)";
            }}
          >
            EXPLORE COLLECTION
          </Link>
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 10 }}>
        <TrustBadges />
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .banner-content {
            padding: var(--space-5) 20px !important;
            background: linear-gradient(to right, rgba(242, 241, 239, 0.9) 0%, rgba(242, 241, 239, 0) 100%);
          }
        }
      `}</style>
    </section>
  );
}
