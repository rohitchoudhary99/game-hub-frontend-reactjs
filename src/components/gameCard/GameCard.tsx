import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'

import { CriticBadgeScore } from './CriticBadgeScore'
import { gameResult } from '../../hooks/UseGame'
import { PlatformsIconsList } from './PlatformsIconsList'
import { getCroppedImageUrl } from '../../services/image-url'

interface gameCardProps {
    game : gameResult
}
export const GameCard = ({game}:gameCardProps) => {
  return (
   <>
   <Card borderRadius={10} overflow='hidden' width='300px'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between' paddingTop='10px'>
            <PlatformsIconsList plateformItemsList={game.parent_platforms.map(p => p.platform)} />
            <CriticBadgeScore score={game.metacritic}></CriticBadgeScore>
            </HStack>
        </CardBody>
   </Card>
   </>
  )
}