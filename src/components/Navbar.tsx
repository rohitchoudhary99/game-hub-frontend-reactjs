import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import { ColorModeSwitch } from './ColorModeSwitch'

export const Navbar = () => {
  return (
    <>
    <HStack justifyContent="space-between" padding="0px 10px">
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
    </HStack>
    </>
  )
}


