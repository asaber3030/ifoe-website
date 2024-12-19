import { useState } from "react"
import Image, { ImageProps } from "next/image"

interface FallbackImageProps extends ImageProps {
  fallbackSrc: string
}

const FallbackImage: React.FC<FallbackImageProps> = ({ fallbackSrc, src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src)
  return <Image {...props} src={imgSrc} alt={alt} onError={() => setImgSrc(fallbackSrc)} />
}

export default FallbackImage
