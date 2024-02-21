import { SimpleGrid } from '@chakra-ui/react'
import { gameQuery } from '../App'
import { UseGame } from '../hooks/UseGame'
import { GameCard } from './gameCard/GameCard'
import { GameCardContainer } from './gameCard/GameCardContainer'
import { GameCardSkeketon } from './gameCard/GameCardSkeketon'


interface props {
    gameQuery : gameQuery

}
export const GameGrid = ({ gameQuery }: props) => {
    const skeleton = [1, 2, 3, 4, 5, 6, 7];
    const { data, error, isLoading } = UseGame(gameQuery)

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2., lg: 3, xl: 5 }} spacing={10} padding={10} alignItems='stretch'>
                {isLoading && skeleton.map((ele) => <GameCardContainer><GameCardSkeketon /></GameCardContainer>)}
                {
                    data.map((item) => (

                        <GameCardContainer>
                            <GameCard game={item} />
                        </GameCardContainer>
                    ))
                }
            </SimpleGrid>
        </>
    )
}
