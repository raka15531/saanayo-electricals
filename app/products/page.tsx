import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import ProductsClient from './ProductsClient'

// Generate metadata (server-side)
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Earthing Electrodes Price List | Chemical & Gel Earthing Systems',
    description: 'Complete earthing electrodes price list. Chemical earthing, gel earthing, copper bonded rods, GI electrodes with specifications and applications.',
    keywords: 'earthing electrodes price, chemical earthing price, gel earthing price, copper bonded rod price, GI earthing electrode price, earthing system cost',
  }
}

// Products data (server-side)
const products = [
  {
    id: 1,
    name: 'Earthing Electrodes',
    description: 'High-performance electrodes for optimal grounding systems with excellent conductivity and corrosion resistance',
    features: ['High conductivity', 'Corrosion resistant', 'Long lifespan', 'Easy installation'],
    applications: ['Industrial Plants', 'Commercial Buildings', 'Residential Complexes'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    name: 'Copper Bonded Rods',
    description: 'Premium copper bonded rods ensuring superior earthing with 99.9% pure copper coating',
    features: ['99.9% pure copper', 'Uniform coating', 'Excellent conductivity', 'Corrosion proof'],
    applications: ['Power Stations', 'Telecom Towers', 'Lightning Protection'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    name: 'Chemical Earthing Systems',
    description: 'Advanced chemical earthing for enhanced performance and maintenance-free operation',
    features: ['Low resistance', 'Maintenance-free', 'Long durability', 'Stable performance'],
    applications: ['High-rise Buildings', 'Data Centers', 'Sensitive Equipment'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    name: 'Lightning Arresters',
    description: 'Reliable protection against lightning strikes and electrical surges',
    features: ['Quick response', 'High durability', 'Easy installation', 'Multiple ratings'],
    applications: ['Buildings', 'Transmission Lines', 'Equipment Protection'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    name: 'Electrical Panels',
    description: 'Custom electrical panels designed for safety, efficiency, and reliability',
    features: ['ISI certified', 'Custom designs', 'Safety compliant', 'Durable construction'],
    applications: ['Industrial Use', 'Commercial Use', 'Residential Use'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    name: 'Surge Protection Devices',
    description: 'Advanced devices to protect equipment from voltage spikes and surges',
    features: ['Fast acting', 'Multiple ratings', 'Reliable performance', 'Easy maintenance'],
    applications: ['Electronic Equipment', 'Power Systems', 'Communication Systems'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 7,
    name: 'GI Earthing Pipes',
    description: 'Galvanized Iron earthing pipes for robust and reliable grounding solutions',
    features: ['Heavy duty', 'Rust proof', 'Long lasting', 'Cost effective'],
    applications: ['Industrial Grounding', 'Lightning Protection', 'General Earthing'],
    image: '/api/placeholder/400/300'
  },
  {
    id: 8,
    name: 'Grounding Accessories',
    description: 'Complete range of accessories for comprehensive earthing systems',
    features: ['Complete solution', 'Easy installation', 'Durable materials', 'Various sizes'],
    applications: ['All Earthing Systems', 'Maintenance Kits', 'Replacement Parts'],
    image: '/api/placeholder/400/300'
  }
]

export default function ProductsPage() {
  return <ProductsClient products={products} />
}