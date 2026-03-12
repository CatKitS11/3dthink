import LogoSvg from '@/assets/svg/logo'

// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <img
        src="/3dthink_ic.png"
        alt="logo"
        className="size-10"
      />
      <span className='text-lg font-semibold'>3DThink</span>
    </div>
  )
}

export default Logo
