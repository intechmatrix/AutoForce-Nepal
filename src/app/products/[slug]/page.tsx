import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetailsPage from "@/components/Productdetails";
import { getProductBySlug, products } from "@/components/data/product";

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Ensure params.slug is properly awaited by wrapping access in a Promise
  const slug = await Promise.resolve(params.slug);
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | ProGulf Lubricants",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | ProGulf Lubricants`,
    description: product.description,
  };
}

// This function generates the static paths at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Page({ params }: Props) {
  // Ensure params.slug is properly awaited
  const slug = await Promise.resolve(params.slug);

  return <ProductDetailsPage params={{ slug }} />;
}
