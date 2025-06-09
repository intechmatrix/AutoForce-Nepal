// app/products/page.tsx
import ProductsSection from "@/components/home/CategorySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | ProGulf Lubricants",
  description:
    "Discover our premium range of ProGulf lubricants for automotive and industrial applications",
};

export default function ProductsPage() {
  return <ProductsSection />;
}
