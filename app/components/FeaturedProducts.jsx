"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section
      className="section-spacing"
      style={{ background: "var(--color-white)" }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--space-6)",
          }}
        >
          <h2
            className="text-h2"
            style={{
              margin: 0,
              fontWeight: 600,
            }}
          >
            BEST OF ROSHH
          </h2>
          <Link
            href="/products"
            className="text-label"
            style={{
              color: "var(--color-black)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
              transition: "gap 300ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "4px")}
          >
            VIEW ALL <ChevronRight size={14} strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-5)",
          }}
          className="featured-grid"
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
