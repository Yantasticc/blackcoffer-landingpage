import Image from 'next/image';
import bigData from '../assets/bigData.png';
import Consultancy from '../assets/consult.png';
import HR from '../assets/hr.png';
import Cybersecurity from '../assets/cyber.png';
import Consultancy1 from '../assets/cons.png';
import Sustainability from '../assets/systain.png';
import Cloud from '../assets/cloud.png';
import Metaverse from '../assets/meta.png';

const services = [
  { name: 'Big Data & Analytics', image: bigData },
  { name: 'Consultancy', image: Consultancy },
  { name: 'HR & Staffing', image: HR },
  { name: 'Cybersecurity', image: Cybersecurity },
  { name: 'Consultancy', image: Consultancy1 },
  { name: 'Sustainability', image: Sustainability },
  { name: 'Cloud', image: Cloud },
  { name: 'Metaverse', image: Metaverse },
];

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium mb-12 text-white">Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square border-2 border-transparent transition duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
