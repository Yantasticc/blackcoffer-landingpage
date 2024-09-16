import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs"; 

const stories = [
  {
    date: '2024 March 17',
    title: 'Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development'
  },
  {
    date: '2024 March 17',
    title: 'Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application'
  },
]

export default function SuccessStories() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">Success Stories</h2>
          <button className="flex items-center text-white hover:underline text-sm md:text-base">
            Read all stories 
            <BsFillArrowRightSquareFill size={22} className="ml-2 bg-blue-900" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-800">
              <p className="text-sm text-gray-400 mb-2">{story.date}</p>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">{story.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-5">
          <BsFillArrowLeftSquareFill size={22} className="mx-2 text-white" />
          <BsFillArrowRightSquareFill size={22} className="mx-2 text-white" />
        </div>
      </div>
    </section>
  )
}
