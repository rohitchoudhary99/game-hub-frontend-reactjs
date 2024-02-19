import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

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

export const UseGame = () => {
    const [games, setGames] = useState<gameResult[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] =useState(false)

    useEffect(() => {
        setLoading(true)
        apiClient.get<gamesResponse>('/games')
            .then((response) =>{
                setGames(response.data.results)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return { games, error, isLoading }
}