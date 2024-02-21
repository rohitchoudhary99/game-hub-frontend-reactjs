import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './searchInput/SearchInput'
import { useState } from 'react'

interface navProps {
  onSearch: (value: string) => void
}


export const Navbar = ({onSearch}:navProps) => {

  return (
    <>
    <HStack padding="0px 10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
    </>
  )
}


