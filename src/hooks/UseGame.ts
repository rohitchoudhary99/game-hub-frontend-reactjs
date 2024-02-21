import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import UseData from "./UseData"
import { genres } from "./UseGenres"
import { fetchPlatformResponse } from "./UsePlateform"

export interface platformInterfcae {
    id: number,
    name: string,
    slug: string
}

export interface gameResult {
    id: number,
    name: string,
    background_image: string,
    rating: number,
    parent_platforms: { platform: platformInterfcae }[],
    metacritic: number
}


export const UseGame = (selectedCategory: genres | null, selectedPlateform: fetchPlatformResponse | null) =>
    UseData<gameResult>('/games',
        {
            params: {
                genres: selectedCategory?.id,
                platform: selectedPlateform?.id
            }
        },
        [selectedCategory?.id, selectedPlateform?.id])
