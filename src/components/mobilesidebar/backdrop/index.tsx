import { cn } from '@/utils'

const Backdrop = ({isOpened,handleToggle}:{isOpened:boolean,handleToggle:()=>void}) => {
  return (
    <div
        onClick={handleToggle}
        className={cn("absolute inset-0 pointer-events-none transition-all duration-300", { "bg-black/50 pointer-events-auto ": isOpened })}
      />
  )
}

export default Backdrop