import { Target, TrendingUp, Globe, Users, Shield, Eye } from 'lucide-react'

const features = [
  { name: 'Consistency', Icon: Target },
  { name: 'Improvement', Icon: TrendingUp },
  { name: 'Branching', Icon: Globe },
  { name: 'Expertise', Icon: Users },
  { name: 'Security', Icon: Shield },
  { name: 'Transparency', Icon: Eye },
]

export default function Features() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Makes Us Different</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg">
                <feature.Icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
