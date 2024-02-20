import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import UseData from "./UseData"
import { genres } from "./UseGenres"

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


export const UseGame = (selectedCategory: genres | null) => UseData<gameResult>('/games', { params: { genres: selectedCategory?.id } }, [selectedCategory?.id])
