import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

export const GameCardSkeketon = () => {
  return (
    <>
    <Card>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
    
    </>
  )
}
