import { Image } from '@chakra-ui/react'
import { UseGame } from '../hooks/UseGame'

export const GameGrid = () => {
   
    const {games,error} = UseGame()

    return (
        <>
            <ul>
                {
                    games.map((item) => (
                        <>
                        <li key={item.id}>
                            <Image src={item.background_image}  boxSize="200px"></Image>
                            {item.name}
                            </li>
                        </>
                    ))
                }
            </ul>
        </>
  )
}
