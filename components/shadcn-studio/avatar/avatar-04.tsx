import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarSizeDemo = ({ image }: { image?: string | null }) => {
  const avatarSrc = image || 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
  return (
    <Avatar className='size-12'>
      <AvatarImage src={avatarSrc} alt='user avatar' />
      <AvatarFallback className='text-xs'>HR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarSizeDemo
