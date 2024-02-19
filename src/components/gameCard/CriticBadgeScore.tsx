import { Badge } from '@chakra-ui/react'
import React from 'react'

interface props {
    score: number
}
export const CriticBadgeScore = ({ score }: props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

    return (
        <>
            <Badge colorScheme={color} fontSize='16px' borderRadius='4px'> {score}</Badge>
        </>
    )
}
