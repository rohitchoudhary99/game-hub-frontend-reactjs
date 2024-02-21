import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'


interface props {
    onSelectSortOrder: (sort: string) => void
}

export const SortSelector = ({ onSelectSortOrder }: props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: '-name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ]
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {
                        // selectedPlatform?.name || 'Plateform'
                        'Order by: Relevance'
                    }
                </MenuButton>
                <MenuList>
                    {
                        sortOrders.map((platform) => (
                            <MenuItem onClick={() => onSelectSortOrder(platform.value)} key={platform.value}>{platform.label}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </>
    )
}
