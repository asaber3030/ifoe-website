import Image from "next/image"
import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <OurStory />
      <WhyChooseUs />
      <OurFranchises />
      <CallToAction />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/bg.jpg"
        alt="Franchise Success"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          Empowering Entrepreneurs
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Your Success is Our Business
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 animate-fade-in-up animation-delay-400">
          Explore Franchises
        </button>
      </div>
    </section>
  )
}

function OurStory() {
  const milestones = [
    { year: 2005, title: "Founded", description: "Started with a vision to empower entrepreneurs" },
    {
      year: 2010,
      title: "Expansion",
      description: "Reached 100 franchise partners across the country"
    },
    {
      year: 2015,
      title: "Innovation",
      description: "Launched proprietary franchise management software"
    },
    {
      year: 2020,
      title: "Global Reach",
      description: "Expanded operations to 10 countries worldwide"
    },
    {
      year: 2023,
      title: "Industry Leader",
      description: "Recognized as the #1 franchise consulting firm"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2"></div>
              <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full border-4 border-blue-500 bg-white"></div>
              <div className="w-1/2 p-4 rounded-lg shadow-lg bg-white">
                <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                <h4 className="text-lg font-semibold">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Proven Success",
      description: "Our franchises have a track record of profitability and growth"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Expert Support",
      description: "Dedicated team to guide you through every step of your journey"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "Quality Assurance",
      description: "Rigorous vetting process for all franchise opportunities"
    }
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurFranchises() {
  const franchises = [
    {
      name: "FoodTech",
      industry: "Food & Beverage",
      image: "/placeholder.svg?height=300&width=400"
    },
    { name: "FitLife", industry: "Fitness", image: "/placeholder.svg?height=300&width=400" },
    { name: "EduSmart", industry: "Education", image: "/placeholder.svg?height=300&width=400" },
    { name: "CleanPro", industry: "Home Services", image: "/placeholder.svg?height=300&width=400" }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {franchises.map((franchise, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={"/bg.jpg"}
                alt={franchise.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-semibold">{franchise.name}</h3>
                <p>{franchise.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Franchise Journey?</h2>
        <p className="text-xl mb-8">Let's turn your entrepreneurial dreams into reality.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
