"use client";

import { motion } from "framer-motion";
import { Truck, Package, BadgeCheck, Lock } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "FAST DELIVERY",
    description: "Quick & safe delivery",
  },
  {
    icon: Package,
    title: "EASY RETURNS",
    description: "Within 15 days",
  },
  {
    icon: BadgeCheck,
    title: "QUALITY ASSURED",
    description: "Best fashion, best quality",
  },
  {
    icon: Lock,
    title: "SECURE PAYMENT",
    description: "100% secure checkout",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TrustBadges() {
  return (
    <section
      style={{
        borderTop: "var(--border-hairline)",
        borderBottom: "var(--border-hairline)",
        background: "var(--color-white)",
      }}
    >
      <motion.div
        className="trust-grid container-wide"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-5)",
          padding: "var(--space-6) 80px",
        }}
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.title}
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-light-gray)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <badge.icon
                size={22}
                strokeWidth={1.5}
                color="var(--color-black)"
              />
            </div>
            <div>
              <p
                className="text-label"
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "var(--color-black)",
                }}
              >
                {badge.title}
              </p>
              <p
                className="text-body-sm"
                style={{
                  margin: "2px 0 0 0",
                  color: "var(--color-stone)",
                  fontSize: "12px",
                }}
              >
                {badge.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: 1fr 1fr !important;
            padding: 32px 20px !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
