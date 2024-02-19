import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface gameResult {
    id : number,
    name : string,
    background_image : string,
    rating: number
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