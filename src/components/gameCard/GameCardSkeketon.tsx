import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

interface skeleton {
  id : number
}
export const GameCardSkeketon = ({id}:skeleton) => {
  return (
    <>
    <Card key={id}>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
    
    </>
  )
}
