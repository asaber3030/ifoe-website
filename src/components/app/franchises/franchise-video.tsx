import HeroVideoDialog from "@/components/ui/hero-video-dialog"

type Props = {
  videoUrl: string | null
  thumbnail: string
}

export const FranchiseVideoCard = ({ videoUrl, thumbnail }: Props) => {
  if (!videoUrl) return null

  return (
    <div className='relative'>
      <HeroVideoDialog
        className='dark:hidden block'
        animationStyle='from-center'
        videoSrc={videoUrl}
        thumbnailSrc={thumbnail}
        thumbnailAlt='Hero Video'
      />
      <HeroVideoDialog
        className='hidden dark:block'
        animationStyle='from-center'
        videoSrc={videoUrl}
        thumbnailSrc={thumbnail}
        thumbnailAlt='Hero Video'
      />
    </div>
  )
}
