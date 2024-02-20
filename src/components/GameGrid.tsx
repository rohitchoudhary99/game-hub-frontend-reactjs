import { SimpleGrid } from '@chakra-ui/react'
import { UseGame, gameResult } from '../hooks/UseGame'
import { GameCard } from './gameCard/GameCard'
import { GameCardSkeketon } from './gameCard/GameCardSkeketon'
import { GameCardContainer } from './gameCard/GameCardContainer'
import { genres } from '../hooks/UseGenres'

interface props {
    currentSelectedCategory: genres | null
}
export const GameGrid = ({ currentSelectedCategory }: props) => {
    const { data, error, isLoading } = UseGame(currentSelectedCategory)
    const skeleton = [1, 2, 3, 4, 5, 6, 7];

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
