"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "MEN",
    image: "/images/cat-men.png",
    link: "/products?category=men",
  },
  {
    title: "WOMEN",
    image: "/images/cat-women.png",
    link: "/products?category=women",
  },
  {
    title: "KIDS",
    image: "/images/cat-kids.png",
    link: "/products?category=kids",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CategoryGrid() {
  return (
    <section
      style={{
        background: "var(--color-charcoal)",
        padding: "var(--space-8) 0",
      }}
    >
      <motion.div
        className="container-wide"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
          <h2 style={{ color: "var(--color-white)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
            EXPLORE COLLECTIONS
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-4)",
          }}
          className="category-grid"
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={cardVariants} style={{ height: "100%" }}>
              <Link
                href={cat.link}
                className="category-card"
                style={{
                  display: "block",
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  textDecoration: "none",
                  height: "500px",
                  width: "100%",
                }}
              >
                {/* Image Container */}
                <div
                  className="image-wrapper"
                  style={{
                    position: "absolute",
                    inset: 0,
                    transition: "transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Overlay Gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)",
                    zIndex: 1,
                    transition: "opacity 500ms ease",
                  }}
                  className="overlay"
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "var(--space-5)",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--color-white)",
                      margin: 0,
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {cat.title}
                  </h3>
                  
                  <div
                    className="arrow-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--color-white)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--color-black)",
                      transition: "transform 500ms ease, background 500ms ease, color 500ms ease",
                    }}
                  >
                    <ArrowRight size={24} strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        .category-card:hover .image-wrapper {
          transform: scale(1.08);
        }
        .category-card:hover .arrow-circle {
          background: var(--color-charcoal);
          color: var(--color-white);
          transform: scale(1.1) rotate(-45deg);
        }
        @media (max-width: 900px) {
          .category-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .category-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
          }
          .category-card {
            aspect-ratio: 4/5 !important;
          }
        }
      `}</style>
    </section>
  );
}
