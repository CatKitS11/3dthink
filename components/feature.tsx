import { BoxIcon, SearchIcon, SparklesIcon, CompassIcon, BoxSelectIcon, VideoIcon,} from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-01/features-section-01'

const featuresList = [
  {
    icon: BoxIcon,
    title: '3D Model Library',
    description:
      'Browse a rich library of high-quality 3D models with preview thumbnails and real-time viewing. Easily find and import assets into your scenes.',
    cardBorderColor: 'border-primary/40 hover:border-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  },
  {
    icon: SparklesIcon,
    title: 'AI 3D Generation',
    description:
      'Generate unique 3D models using AI powered by ComfyUI workflows. Turn simple prompts or reference images into ready-to-use 3D assets.',
    cardBorderColor:
      'border-green-600/40 hover:border-green-600 dark:border-green-400/40 dark:hover:border-green-400',
    avatarTextColor: 'text-green-600 dark:text-green-400',
    avatarBgColor: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
    icon: SearchIcon,
    title: 'Smart Asset Search',
    description:
      'Quickly find 3D assets using advanced search, tags, and filters. Locate the perfect models for your project in seconds.',
    cardBorderColor:
      'border-amber-600/40 hover:border-amber-600 dark:border-amber-400/40 dark:hover:border-amber-400',
    avatarTextColor: 'text-amber-600 dark:text-amber-400',
    avatarBgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
    icon: CompassIcon,
    title: 'Panorama Walkthrough',
    description:
      'Explore interior and exterior spaces with immersive 360° panorama navigation. Teleport between viewpoints like a virtual street view experience.',
    cardBorderColor: 'border-destructive/40 hover:border-destructive',
    avatarTextColor: 'text-destructive',
    avatarBgColor: 'bg-destructive/10'
  },
  {
    icon: BoxSelectIcon,
    title: 'Real-Time 3D Walkthrough',
    description:
      'Experience fully interactive architectural environments rendered in real time using Three.js. Walk through scenes directly in your browser.',
    cardBorderColor:
      'border-sky-600/40 hover:border-sky-600 dark:border-sky-400/40 dark:hover:border-sky-400',
    avatarTextColor: 'text-sky-600 dark:text-sky-400',
    avatarBgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    icon: VideoIcon,
    title: 'AI Image & Video Generation',
    description:
      'Create stunning visualizations with AI-generated images and videos powered by ComfyUI pipelines for architectural and design presentations.',
    cardBorderColor: 'border-primary/40 hover:border-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  }
]

const FeaturesPage = ({className}: {className?: string}) => {
  return (
    <div id="features" className={className}>
      <Features featuresList={featuresList} />
    </div>
  )
}

export default FeaturesPage