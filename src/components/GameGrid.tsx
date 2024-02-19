import { Image, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { UseGame } from '../hooks/UseGame'
import { GameCard } from './gameCard/GameCard'
import { GameCardSkeketon } from './gameCard/GameCardSkeketon'
import { GameCardContainer } from './gameCard/GameCardContainer'

export const GameGrid = () => {
    const { games, error, isLoading } = UseGame()
    const skeleton = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2., lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoading && skeleton.map((ele) => <GameCardContainer><GameCardSkeketon /></GameCardContainer>)}
                {
                    games.map((item) => (
                        <GameCardContainer>
                            <GameCard game={item} />
                        </GameCardContainer>
                    ))
                }
            </SimpleGrid>
        </>
    )
}
