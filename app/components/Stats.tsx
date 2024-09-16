import { ReactNode } from 'react';
import { ChartBarIcon, UserGroupIcon, GlobeAltIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import Office from '../assets/office.png';
import Image from 'next/image';

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-xl mb-5">The reason why Blackcoffer stands out</p>
        <h2 className="text-3xl font-medium mb-12 text-white">Blackcoffer Unfolds Solutions To Everything</h2>
        {/* Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-lg shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row">
          {/* Stats Section */}
          <div className="w-full md:w-3/4 md:pr-8 mb-6 md:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <Stat number="12+" text="Years of Experience" icon={<ChartBarIcon className="w-6 h-6" />} />
              <Stat number="100+" text="Clients" icon={<UserGroupIcon className="w-6 h-6" />} />
              <Stat number="97%" text="Client Retention Rate" icon={<ChartBarIcon className="w-6 h-6" />} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <Stat number="40+" text={<span className="text-gray-400">AI solutions</span>} icon={<CpuChipIcon className="w-6 h-6 text-white" />} />
              <Stat number="350+" text="Employees" icon={<UserGroupIcon className="w-6 h-6" />} />
              <Stat number="2+" text="Countries" icon={<GlobeAltIcon className="w-6 h-6" />} />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
              <Stat number="80+" text="Big Data Solutions" icon={<ChartBarIcon className="w-6 h-6" />} />
              <div className="sm:ml-8 mt-4 sm:mt-0">
                <p className="text-lg font-semibold mb-2">Dedicated to</p>
                <p className="text-sm text-gray-400">Providing Top-Notch Big Data Analytics & AI Services</p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/4">
            <div className="bg-gray-700 h-48 md:h-full rounded-lg overflow-hidden">
              <Image
                src={Office}
                alt="Office space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatProps = {
  number: string;
  text: ReactNode;
  icon: ReactNode;
};

function Stat({ number, text, icon }: StatProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-gray-700 p-3 rounded-full">{icon}</div>
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-sm text-gray-400">{text}</p>
      </div>
    </div>
  );
}
