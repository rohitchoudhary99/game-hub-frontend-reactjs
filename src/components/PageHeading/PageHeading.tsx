import { Heading } from '@chakra-ui/react'
import React from 'react'
import { gameQuery } from '../../App'

interface props {
    gameQuery: gameQuery
}

export const PageHeading = ({ gameQuery }: props) => {
    
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games `

    return (
        <>
            <Heading as='h1'> {heading}</Heading>
        </>
    )
}
