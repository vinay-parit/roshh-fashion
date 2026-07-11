"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewSeasonBanner() {
  return (
    <section
      style={{
        background: "var(--color-off-white)",
        overflow: "hidden",
        flex: 1,
      }}
    >
      <div
        className="new-season-grid container-wide"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          height: "100%",
          alignItems: "center",
        }}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            padding: "var(--space-8) var(--space-7)",
          }}
        >
          <p
            className="text-label"
            style={{
              color: "var(--color-stone)",
              marginBottom: "var(--space-3)",
              fontSize: "11px",
            }}
          >
            NEW SEASON
          </p>
          <h2
            className="text-h1"
            style={{
              margin: "0 0 var(--space-4) 0",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
            }}
          >
            NEW
            <br />
            VIBES
          </h2>
          <p
            className="text-body"
            style={{
              color: "var(--color-stone)",
              marginBottom: "var(--space-6)",
              maxWidth: "280px",
              lineHeight: 1.7,
            }}
          >
            Discover everything new and now. Curated pieces for the season
            ahead.
          </p>
          <Link href="/products" className="btn-outline">
            EXPLORE COLLECTION
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{
            position: "relative",
            height: "100%",
            minHeight: "500px",
          }}
        >
          <Image
            src="/images/new-season.png"
            alt="New Season Collection - Roshh Fashion"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .new-season-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .new-season-grid > div:last-child {
            min-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
