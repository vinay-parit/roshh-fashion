"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3/4",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          background: "var(--color-light-gray)",
          transition: "box-shadow 450ms ease-out, transform 450ms ease-out",
          transform: isHovered ? "scale(1.03)" : "scale(1)",
          boxShadow: isHovered ? "var(--shadow-md)" : "none",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 600ms ease-out",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "var(--color-black)",
              color: "var(--color-white)",
              padding: "6px 12px",
              borderRadius: "var(--radius-sm)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "36px",
            height: "36px",
            borderRadius: "var(--radius-full)",
            background: "rgba(255, 255, 255, 0.9)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 250ms ease-out",
            opacity: isHovered ? 1 : 0.6,
            transform: isHovered ? "scale(1)" : "scale(0.9)",
          }}
        >
          <Heart
            size={18}
            strokeWidth={1.5}
            color={isWishlisted ? "#8B2E2E" : "var(--color-black)"}
            fill={isWishlisted ? "#8B2E2E" : "none"}
          />
        </button>

        {/* Discount Badge */}
        {discount && (
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              background: "var(--color-success)",
              color: "var(--color-white)",
              padding: "4px 10px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              fontWeight: 600,
            }}
          >
            -{discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: "var(--space-3) 0 0" }}>
        <h3
          className="text-body"
          style={{
            margin: 0,
            fontWeight: 500,
            color: "var(--color-black)",
            lineHeight: 1.4,
          }}
        >
          {product.name}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "6px",
          }}
        >
          <span
            className="text-price"
            style={{ color: "var(--color-black)" }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: "13px",
                color: "var(--color-mid-gray)",
                textDecoration: "line-through",
              }}
            >
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        {/* Size indicators */}
        {product.sizes && (
          <div
            style={{
              display: "flex",
              gap: "4px",
              marginTop: "8px",
              flexWrap: "wrap",
            }}
          >
            {product.sizes.slice(0, 5).map((size) => (
              <span
                key={size}
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "var(--color-stone)",
                  padding: "2px 6px",
                  border: "1px solid var(--color-light-gray)",
                  borderRadius: "var(--radius-sm)",
                  letterSpacing: "0.05em",
                }}
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
