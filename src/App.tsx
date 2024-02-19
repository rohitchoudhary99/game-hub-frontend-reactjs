import { Box, Grid, GridItem, Image, Show } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { GameGrid } from './components/GameGrid'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base: `'nav' ' main'`,
        lg: `'nav nav''aside main'`
      }}>
        <GridItem area={'nav'}>
          <Navbar></Navbar>
        </GridItem>

        {/* aside */}
        <Show above='lg'>
          <GridItem area={'aside'}>aside</GridItem>
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
