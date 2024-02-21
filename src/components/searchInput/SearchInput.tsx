import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface searchprops {
    onSearch: (value: string) => void
}

export const SearchInput = ({ onSearch }: searchprops) => {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <>
            <form style={{width:'100%'}} onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value)
            }} >
                <InputGroup>
                    <InputLeftElement children={<BsSearch />} />
                    <Input ref ={ref} borderRadius={20} placeholder='Search games ...' variant='filled'></Input>
                </InputGroup>
            </form>
        </>
    )
}
