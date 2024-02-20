import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import UseData from "./UseData"

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

interface gamesResponse {
    count: number,
    results: gameResult[]
}

export const UseGame = () => UseData<gameResult>('/games')