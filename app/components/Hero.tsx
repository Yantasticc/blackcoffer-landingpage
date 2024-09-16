import { BsArrowRightCircleFill } from "react-icons/bs"; 
import Link from "next/link";

export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-900 to-black py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">TOGETHER WE REINVENTED</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Together, we can reinvent your business. Innovation is about breaking industry norms. 
            Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise 
            can help your business become the next best version of itself.
          </p>
          <Link href='/' className="flex">
            See what we do <BsArrowRightCircleFill size={22} className="mx-3"/>
          </Link>
        </div>
      </section>
    )
  }