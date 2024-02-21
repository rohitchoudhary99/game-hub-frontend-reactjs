import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { GameGrid } from './components/GameGrid'
import { GenresList } from './components/GenresList'
import { Navbar } from './components/Navbar'
import { PlateformSelector } from './components/plateformSelector/PlateformSelector'
import { genres } from './hooks/UseGenres'
import { platform } from './hooks/UsePlateform'

export interface gameQuery {
  genre: genres;
  platform: platform
}

function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery)

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
            <GenresList onSelectCategory={(genre) => setGameQuery({ ...gameQuery, genre })} selectedCategory={gameQuery.genre}></GenresList>
          </GridItem>
        </Show>

        {/* main */}
        <GridItem area={'main'}>
          <PlateformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}></PlateformSelector>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
