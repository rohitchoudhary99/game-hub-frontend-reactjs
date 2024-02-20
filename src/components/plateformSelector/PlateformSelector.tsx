import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { UsePlateform } from "../../hooks/UsePlateform"

export const PlateformSelector = () => {
    const { data, isLoading, error } = UsePlateform()
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Platform
                </MenuButton>
                <MenuList>
                    {
                        data.map((platform) => (
                            <MenuItem key={platform.id}>{platform.name}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </>
    )
}
