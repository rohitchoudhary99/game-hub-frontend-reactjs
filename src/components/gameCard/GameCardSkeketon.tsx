import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const GameCardSkeketon = () => {
  return (
    <>
    <Card width='300px'>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
    
    </>
  )
}
