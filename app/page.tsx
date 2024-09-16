import CallToAction from './components/CallToAction'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import SuccessStories from './components/SuccessStories'
const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Features />
        <SuccessStories />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default page

