import { Image, SimpleGrid } from '@chakra-ui/react'
import { UseGame } from '../hooks/UseGame'
import { GameCard } from './gameCard/GameCard'

export const GameGrid = () => {
   
    const {games,error} = UseGame()

    return (
        <>
        <SimpleGrid columns={{sm:1,md:2.,lg:3,xl:5}} spacing={10} padding={10}>
                {
                    games.map((item) => (
                        <GameCard game={item} />

                    ))
                }
            </SimpleGrid>
        </>
  )
}
