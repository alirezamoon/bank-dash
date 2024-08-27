import clsx from 'clsx'

const cn = (...classes: (string | undefined | boolean)[]) => {
  return clsx(classes.filter(Boolean))
}

export default cn
