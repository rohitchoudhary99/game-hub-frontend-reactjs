import { Box, Grid, GridItem, Image, Show } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { GameGrid } from './components/GameGrid'
import { GenresList } from './components/GenresList'
import { useState } from 'react'
import { genres } from './hooks/UseGenres'
import { fetchPlatformResponse } from './hooks/UsePlateform'
import { PlateformSelector } from './components/plateformSelector/PlateformSelector'

function App() {
  const [selectedCategory, SetCategory] = useState<genres | null>(null);
  const [selectedPlateform, setPlatform] = useState<fetchPlatformResponse | null>(null);

  return (
    <>
      <Grid templateAreas={{
        base: `'nav' ' main'`,
        lg: `'nav nav''aside main'`
      }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area={'nav'} marginBottom='20px'>
          <Navbar></Navbar>
        </GridItem>

        {/* aside */}
        <Show above='lg'>
          <GridItem area={'aside'} paddingX='18px'>
            <GenresList onSelectCategory={SetCategory} selectedCategory={selectedCategory}></GenresList>
          </GridItem>
        </Show>

        {/* main */}
        <GridItem area={'main'}>
        <PlateformSelector selectedPlatform={selectedPlateform} onSelectPlatform={setPlatform}></PlateformSelector>
          <GameGrid currentSelectedCategory={selectedCategory} selectedPlateform={selectedPlateform}></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
