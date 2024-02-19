import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
export const Navbar = () => {
  return (
    <>
    <HStack>
        <Image src={logo} boxSize="60px"></Image>
    </HStack>
    </>
  )
}
