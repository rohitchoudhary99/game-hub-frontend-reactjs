import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { UsePlateform, fetchPlatformResponse } from "../../hooks/UsePlateform"

interface paltformProps {
    onSelectPlatform : (paltform: fetchPlatformResponse) => void,
    selectedPlatform : fetchPlatformResponse | null
}
export const PlateformSelector = ({onSelectPlatform ,selectedPlatform} : paltformProps) => {
    const { data, isLoading, error } = UsePlateform()
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {
                        selectedPlatform?.name || 'Plateform'
                    }
                </MenuButton>
                <MenuList>
                    {
                        data.map((platform) => (
                            <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </>
    )
}
