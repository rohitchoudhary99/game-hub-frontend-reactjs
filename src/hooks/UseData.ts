import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

interface fetchResponse<T> {
    count: number,
    results: T[],
}

const UseData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        apiClient.get<fetchResponse<T>>(endpoint)
            .then(({ data }) => {
                setLoading(false)
                setData(data.results)

            }).catch((error) => {
                setLoading(false)
                setError(error.message)
            })
    }, [])

    return { data, isLoading, error }
}

export default UseData