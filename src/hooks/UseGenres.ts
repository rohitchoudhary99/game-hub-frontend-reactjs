import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface genres {
    id: number,
    name: string
}

interface fetchGenersResponse {
    count: number,
    results: genres[]
}

export const UseGenres = () => {
    const [genres, setGenres] = useState<genres[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        apiClient.get<fetchGenersResponse>('/genres')
            .then(({data}) => {
                setGenres(data.results)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    return {genres, error, isLoading}
}