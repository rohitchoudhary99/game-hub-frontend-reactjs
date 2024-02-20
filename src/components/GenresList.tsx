import React from 'react'
import UseGenres from '../hooks/UseGenres'
import { HStack, Image, List, ListItem, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import { getCroppedImageUrl } from '../services/image-url'

export const GenresList = () => {
    const { data, isLoading, error } = UseGenres()

    return (
        <>
        {isLoading && ( <Skeleton><SkeletonText></SkeletonText></Skeleton>)}
            <List>
                {
                    data.map((genre) => <ListItem paddingY='10px'>  
                        <HStack>
                            <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)}/>
                            <Text fontSize='lg'> {genre.name} </Text>
                        </HStack>
                    </ListItem>)
                }
            </List>
            <ul>

            </ul>
        </>
    )
}
