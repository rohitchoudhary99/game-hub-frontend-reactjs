import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './searchInput/SearchInput'

export const Navbar = () => {
  return (
    <>
    <HStack padding="0px 10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput/>
        <ColorModeSwitch />
    </HStack>
    </>
  )
}


