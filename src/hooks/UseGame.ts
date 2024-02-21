import { gameQuery } from "../App"
import UseData from "./UseData"
import { genres } from "./UseGenres"
import { platform } from "./UsePlateform"

export interface platformInterfcae {
    id: number,
    name: string,
    slug: string
}

export interface game {
    id: number,
    name: string,
    background_image: string,
    rating: number,
    parent_platforms: { platform: platformInterfcae }[],
    metacritic: number
}


export const UseGame = (gameQuery:gameQuery | null) =>
    UseData<game>('/games',
        {
            params: {
                genres: gameQuery?.genre?.id,
                platform: gameQuery?.platform?.id,
                ordering : gameQuery?.sortOrder
            }
        },
        [gameQuery?.genre?.id, gameQuery?.platform?.id,gameQuery?.sortOrder])
