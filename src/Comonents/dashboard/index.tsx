import CreditCard from './creditCard'

const Dashboard = () => {
  return (
    <div className='max-w-full'>
      <div className='max-w-full'>
        <div className='flex justify-between mb-3 md:mb-5'>
          <h4 className='text-indigo-900 md:text-2xl font-bold'>My Cards</h4>
          <button className='text-indigo-900 text-sm md:text-lg font-semibold'>
            See All
          </button>
        </div>
        <div className='flex justify-between gap-5 overflow-auto'>
          <CreditCard blueCard />
          <CreditCard />
        </div>
      </div>
    </div>
  )
}

const Item = () => (
  <div className='h-64 bg-blue-500 text-white flex items-center justify-center text-xl'>
    Slide Content
  </div>
)

export default Dashboard
