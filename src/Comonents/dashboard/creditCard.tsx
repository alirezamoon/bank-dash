import { Money2 } from 'iconsax-react'
import cn from 'Utility/cn'

type CreditCardProps = {
  blueCard?: boolean
}

const CreditCard = ({ blueCard }: CreditCardProps) => {
  return (
    <div
      className={cn(
        'max-w-96 min-w-64 w-full h-44 md:h-60 rounded-2xl md:rounded-3xl bg-gradient-to-br flex flex-col justify-between',
        blueCard
          ? 'from-indigo-600 to-indigo-800 text-white'
          : 'text-indigo-900 bg-white border border-sky-100'
      )}
    >
      <div className='flex justify-between px-5 md:px-6 pt-4 md:pt-6'>
        <div>
          <p className='text-xs'>Balance</p>
          <p className='md:text-xl font-semibold'>$5,756</p>
        </div>
        <Money2
          className={cn(
            'w-8 h-8 md:w-11 md:h-11',
            blueCard ? 'text-white' : 'text-gray-800'
          )}
          variant='Bulk'
        />
      </div>
      <div className='flex justify-between px-5 md:px-6'>
        <div className='grow'>
          <p className='text-xs opacity-50'>CARD HOLDER</p>
          <p className='text-sm md:text-xl font-semibold'>Eddy Cusuma</p>
        </div>
        <div className='grow'>
          <p className='text-xs opacity-50'>VALID THRU</p>
          <p className='text-sm md:text-xl font-semibold'>12/22</p>
        </div>
      </div>
      <div
        className={cn(
          'flex justify-between py-3 px-5 md:p-6',
          blueCard
            ? 'bg-gradient-to-b from-[#FFFFFF99] to-60% to-transparent'
            : 'border-t border-sky-100'
        )}
      >
        <p className='md:text-2xl font-semibold'>6104 **** **** 6612</p>
        <div className='relative'>
          <div
            className={cn(
              'w-5 md:w-8 h-5 md:h-8 rounded-full opacity-50 absolute right-0',
              blueCard ? 'bg-white' : 'bg-slate-400'
            )}
          />
          <div
            className={cn(
              'w-5 md:w-8 h-5 md:h-8 rounded-full opacity-50 absolute right-2.5 md:right-4',
              blueCard ? 'bg-white' : 'bg-slate-400'
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default CreditCard
