import { Facebook, Youtube, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Founder</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
              <li><a href="#" className="hover:text-blue-500">Team</a></li>
              <li><a href="#" className="hover:text-blue-500">Locations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500">Solutions</a></li>
              <li><a href="#" className="hover:text-blue-500">Our Process</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">Taking seamless key performance indicators offline to maximise the long tail.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}