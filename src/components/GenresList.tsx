import { Button, HStack, Image, List, ListItem, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import { getCroppedImageUrl } from '../services/image-url'
import { UseGenres, genres } from '../hooks/UseGenres'


interface props {
    onSelectCategory: (genre: genres) => void
}
export const GenresList = ({ onSelectCategory }: props) => {
    const { data, isLoading, error } = UseGenres()

    return (
        <>
            {isLoading && (<Skeleton><SkeletonText></SkeletonText></Skeleton>)}
            <List>
                {
                    data.map((genre) => <ListItem paddingY='10px'>
                        <HStack>
                            <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} />
                            <Button onClick={() => onSelectCategory(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>)
                }
            </List>
            <ul>

            </ul>
        </>
    )
}
