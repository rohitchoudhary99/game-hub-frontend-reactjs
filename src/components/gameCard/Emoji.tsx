import { Image, ImageProps } from '@chakra-ui/react'
import fiveStar from '../../assets/5star.png'
import fourStar from '../../assets/4star.png'

interface emoji {
    rating: number
}

export const Emoji = ({ rating }: emoji) => {

    if (rating < 3) return ''

    const emojiMap: { [key: number]: ImageProps } = {
        4: { src: fourStar, alt: 'fourStar' },
        5: { src: fiveStar, alt: 'fourStar' }
    }

    return (
        <>
            <Image {...emojiMap[rating]} boxSize='25px'/>
        </>
    )
}