import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'

import { CriticBadgeScore } from './CriticBadgeScore'
import { game } from '../../hooks/UseGame'
import { PlatformsIconsList } from './PlatformsIconsList'
import { getCroppedImageUrl } from '../../services/image-url'
import { Emoji } from './Emoji'

interface gameCardProps {
    game : game
}
export const GameCard = ({game}:gameCardProps) => {
  return (
   <>
   <Card key={game.id}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent='space-between' paddingTop='10px'>
            <PlatformsIconsList plateformItemsList={game.parent_platforms.map(p => p.platform)} />
            <CriticBadgeScore score={game.metacritic}></CriticBadgeScore>
          </HStack>
          <Heading fontSize='2xl' paddingTop='10px'>{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
   </Card>
   </>
  )
}