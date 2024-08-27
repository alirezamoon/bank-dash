import { cva } from 'class-variance-authority'
import cn from 'Utility/cn'

type ButtonProps = {
  size?: Size
  variant?: Intent
} & React.ComponentProps<'button'>

type Size = 'small' | 'medium'
type Intent = 'header'

const button = cva('', {
  variants: {
    variant: {
      header:
        'bg-slate-100 rounded-full items-center justify-center duration-200 hover:bg-slate-200 focus:ring-4 focus:ring-blue-100',
    },
    size: {
      small: 'w-10 h-10 lg:w-14 lg:h-14',
      medium: 'w-9 h-9 md:w-11 md:h-11 lg:w-16 lg:h-16',
    },
  },
  defaultVariants: {
    variant: 'header',
    size: 'small',
  },
})

const Button = ({
  children,
  className = '',
  size,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(button({ variant, size }), className)}>
      {children}
    </button>
  )
}

export default Button
