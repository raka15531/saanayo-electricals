import ProductsClient from './ProductsClient'

const products = [
  {
    id: 1,
    name: "Chemical Earthing Electrode",
    description: "High-quality earthing system for industrial and residential use.",
    features: ["Corrosion Resistant", "Long Life", "Low Maintenance"],
    applications: ["Homes", "Industries", "Offices"],
    image: "/images/earthing.jpg"
  },
  // Add all your other products here…
]

export default function Page() {
  return <ProductsClient products={products} />
}
