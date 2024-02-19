import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { gameResult } from '../../hooks/UseGame'
import { PlatformsIconsList } from './PlatformsIconsList'

interface gameCardProps {
    game : gameResult
}
export const GameCard = ({game}:gameCardProps) => {
  return (
   <>
   <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformsIconsList plateformItemsList={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
   </Card>
   </>
  )
}