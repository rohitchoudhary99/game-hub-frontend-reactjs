import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface fetchResponse<T> {
    count: number,
    results: T[],
}

const UseData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        apiClient.get<fetchResponse<T>>(endpoint, { ...requestConfig })
            .then(({ data }) => {
                setLoading(false)
                setData(data.results)

            }).catch((error) => {
                setLoading(false)
                setError(error.message)
            })
    }, deps ? [...deps] : [])

    return { data, isLoading, error }
}

export default UseData