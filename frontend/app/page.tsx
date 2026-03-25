import Features from "@/components/home/Features"
import HeroSection from "@/components/home/HeroSection"
import Product from "@/components/home/Product"
import Working from "@/components/home/Working"
import FAQ from "@/components/home/FAQ"

const page = () => {
  return (
    <div>
      <HeroSection />
      <Product />
      <Features />
      <Working />
      <FAQ />
    </div>
  )
}

export default page
