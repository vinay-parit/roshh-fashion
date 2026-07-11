"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹1,000", min: 0, max: 999 },
  { label: "₹1,000 – ₹2,999", min: 1000, max: 2999 },
  { label: "₹3,000 – ₹4,999", min: 3000, max: 4999 },
  { label: "₹5,000+", min: 5000, max: Infinity },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.type === activeCategory);
    }

    // URL category filter (men/women/kids)
    if (categoryFromUrl) {
      filtered = filtered.filter((p) => p.category === categoryFromUrl);
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, sortBy, priceRange, categoryFromUrl]);

  return (
    <div style={{ background: "var(--color-white)" }}>
      {/* Breadcrumb */}
      <div
        className="container-wide"
        style={{
          padding: "var(--space-4) 80px",
          borderBottom: "var(--border-hairline)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "var(--color-stone)",
          }}
        >
          <Link
            href="/"
            style={{
              color: "var(--color-stone)",
              textDecoration: "none",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "var(--color-black)")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = "var(--color-stone)")
            }
          >
            Home
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span style={{ color: "var(--color-black)", fontWeight: 500 }}>
            {categoryFromUrl
              ? categoryFromUrl.charAt(0).toUpperCase() +
                categoryFromUrl.slice(1)
              : "All Products"}
          </span>
        </div>
      </div>

      {/* Page Header */}
      <div
        className="container-wide section-spacing"
        style={{
          paddingBottom: "var(--space-6)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-h1"
          style={{
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {categoryFromUrl
            ? categoryFromUrl.toUpperCase()
            : "ALL PRODUCTS"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-body"
          style={{
            color: "var(--color-stone)",
            marginTop: "var(--space-2)",
          }}
        >
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </motion.p>
      </div>

      {/* Filters & Sort Bar */}
      <div
        className="container-wide"
        style={{
          borderTop: "var(--border-hairline)",
          borderBottom: "var(--border-hairline)",
          padding: "var(--space-3) 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: "76px",
          zIndex: 100,
          background: "var(--color-white)",
        }}
      >
        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-4)",
            alignItems: "center",
            overflowX: "auto",
            flex: 1,
            paddingRight: "var(--space-4)",
          }}
          className="category-tabs"
        >
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className="text-label"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                fontSize: "11px",
                letterSpacing: "0.15em",
                color:
                  activeCategory === cat.slug
                    ? "var(--color-black)"
                    : "var(--color-stone)",
                borderBottom:
                  activeCategory === cat.slug
                    ? "2px solid var(--color-black)"
                    : "2px solid transparent",
                transition: "all 250ms ease",
                whiteSpace: "nowrap",
                fontWeight: activeCategory === cat.slug ? 700 : 600,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              background: showFilters
                ? "var(--color-black)"
                : "none",
              color: showFilters
                ? "var(--color-white)"
                : "var(--color-black)",
              border: "var(--border-strong)",
              borderRadius: "var(--radius-full)",
              padding: "8px 20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 250ms ease",
            }}
          >
            {showFilters ? (
              <X size={14} strokeWidth={1.5} />
            ) : (
              <SlidersHorizontal size={14} strokeWidth={1.5} />
            )}
            FILTERS
          </button>

          {/* Sort Dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              style={{
                background: "none",
                border: "var(--border-strong)",
                borderRadius: "var(--radius-full)",
                padding: "8px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-black)",
                transition: "all 250ms ease",
              }}
            >
              SORT
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                style={{
                  transform: showSortDropdown
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 200ms",
                }}
              />
            </button>

            {showSortDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "var(--color-white)",
                  border: "var(--border-hairline)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-md)",
                  padding: "8px 0",
                  minWidth: "200px",
                  zIndex: 10,
                }}
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortDropdown(false);
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background:
                        sortBy === option.value
                          ? "var(--color-light-gray)"
                          : "none",
                      border: "none",
                      padding: "10px 20px",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "var(--color-black)",
                      fontWeight: sortBy === option.value ? 600 : 400,
                      transition: "background 200ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "var(--color-light-gray)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background =
                        sortBy === option.value
                          ? "var(--color-light-gray)"
                          : "transparent")
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Price Filter Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="container-wide"
          style={{
            borderBottom: "var(--border-hairline)",
            padding: "var(--space-4) 80px",
            background: "var(--color-off-white)",
          }}
        >
          <div>
            <p
              className="text-label"
              style={{
                marginBottom: "var(--space-3)",
                fontSize: "11px",
                color: "var(--color-stone)",
              }}
            >
              PRICE RANGE
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-2)",
                flexWrap: "wrap",
              }}
            >
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => setPriceRange(range)}
                  style={{
                    background:
                      priceRange.label === range.label
                        ? "var(--color-black)"
                        : "var(--color-white)",
                    color:
                      priceRange.label === range.label
                        ? "var(--color-white)"
                        : "var(--color-black)",
                    border: "var(--border-strong)",
                    borderRadius: "var(--radius-full)",
                    padding: "8px 20px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 500,
                    transition: "all 250ms ease",
                  }}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Products Grid */}
      <div
        className="container-wide section-spacing"
        style={{ paddingTop: "var(--space-6)" }}
      >
        {filteredProducts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-5)",
            }}
            className="products-grid"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: "center",
              padding: "var(--space-10) 0",
            }}
          >
            <p
              className="text-h2"
              style={{ color: "var(--color-mid-gray)", marginBottom: "16px" }}
            >
              No products found
            </p>
            <p
              className="text-body"
              style={{ color: "var(--color-stone)", marginBottom: "32px" }}
            >
              Try adjusting your filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setPriceRange(priceRanges[0]);
              }}
              className="btn-outline"
            >
              CLEAR ALL FILTERS
            </button>
          </motion.div>
        )}
      </div>

      {/* Click away to close sort dropdown */}
      {showSortDropdown && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
          }}
          onClick={() => setShowSortDropdown(false)}
        />
      )}

      {/* Products Page Responsive */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .category-tabs {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
