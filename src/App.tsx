import { Box, Grid, GridItem, Image, Show } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { GameGrid } from './components/GameGrid'
import { GenresList } from './components/GenresList'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base: `'nav' ' main'`,
        lg: `'nav nav''aside main'`
      }}
       templateColumns={{
        base : '1fr',
        lg : '200px 1fr'
       }}
      >
        <GridItem area={'nav'} marginBottom='20px'>
          <Navbar></Navbar>
        </GridItem>

        {/* aside */}
        <Show above='lg'>
          <GridItem area={'aside'} paddingX='18px'>
            <GenresList></GenresList>
          </GridItem>
        </Show>

        {/* main */}
        <GridItem area={'main'}>
            <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
