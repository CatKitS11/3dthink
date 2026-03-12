import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, Linkedin, Github } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import Logo from '@/components/shadcn-studio/logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1 max-md:flex-col sm:px-6 sm:py-1 md:gap-6 md:py-1'>
        <a href='#'>
          <div className='flex items-center gap-3'>
            <Logo className='gap-3' />
          </div>
        </a>

        {/* <div className='flex items-center gap-5 whitespace-nowrap'>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            About
          </a>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Features
          </a>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Works
          </a>
          <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Career
          </a>
        </div> */}

        <div className='flex items-center gap-4'>
          <a href='https://github.com/CatKitS11' target='_blank'>
            <Github className='size-5' />
          </a>
          {/* <a href='#'>
            <FacebookIcon className='size-5' />
          </a> */}
          <a href='https://www.instagram.com/patchara_l11' target='_blank'>
            <InstagramIcon className='size-5' />
          </a>
          {/* <a href='#'>
            <TwitterIcon className='size-5' />
          </a> */}
          {/* <a href='#'>
            <YoutubeIcon className='size-5' />
          </a> */}
          <a href='https://www.linkedin.com/in/patchara11' target='_blank'>
            <Linkedin className='size-5' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-4 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='#' className='hover:underline'>
            {`3DThink.`}{' '}
          </a>
          {'🚀 Building 3D futures with ❤️'}
        </p>
      </div>
    </footer>
  )
}

export default Footer
