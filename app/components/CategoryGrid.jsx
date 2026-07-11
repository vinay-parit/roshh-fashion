"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "MEN",
    description: "Elevated everyday essentials.",
    image: "/images/cat-men.png",
    link: "/products?category=men",
    cta: "SHOP MEN",
  },
  {
    title: "WOMEN",
    description: "Effortless style for every you.",
    image: "/images/cat-women.png",
    link: "/products?category=women",
    cta: "SHOP WOMEN",
  },
  {
    title: "KIDS",
    description: "Comfort meets cool everyday.",
    image: "/images/cat-kids.png",
    link: "/products?category=kids",
    cta: "SHOP KIDS",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CategoryGrid() {
  return (
    <section
      className="section-spacing"
      style={{ background: "var(--color-white)" }}
    >
      <motion.div
        className="container-wide"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-5)",
          }}
          className="category-grid"
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={cardVariants}>
              <Link
                href={cat.link}
                style={{
                  display: "block",
                  background: "var(--color-light-gray)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "var(--color-black)",
                  transition: "transform 450ms ease-out, box-shadow 450ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-4)",
                    padding: "var(--space-4)",
                  }}
                >
                  {/* Category Image */}
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Category Info */}
                  <div style={{ flex: 1 }}>
                    <h3
                      className="text-h3"
                      style={{
                        margin: "0 0 6px 0",
                        fontWeight: 600,
                      }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      className="text-body-sm"
                      style={{
                        color: "var(--color-stone)",
                        margin: "0 0 12px 0",
                      }}
                    >
                      {cat.description}
                    </p>
                    <span
                      className="text-label"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "11px",
                        color: "var(--color-black)",
                      }}
                    >
                      {cat.cta}{" "}
                      <ChevronRight size={14} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
