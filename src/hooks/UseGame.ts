import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

export interface platformInterfcae{
    id : number,
    name: string,
    slug :string
}

export interface gameResult {
    id : number,
    name : string,
    background_image : string,
    rating: number,
    parent_platforms : {platform:platformInterfcae} []
}

interface gamesResponse {
    count : number,
    results : gameResult[]
}

export const UseGame =() => {
    const [games, setGames] = useState<gameResult[]>([])
    const [error, setError] = useState('')

    useEffect(()=>{
        apiClient.get<gamesResponse>('/games')
        .then((response) => setGames(response.data.results))
        .catch((err) => setError(err.message))
    },[])

    return {games,error}
}