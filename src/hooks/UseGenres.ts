import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import UseData from "./UseData"

interface gamesData {
    id: number,
    name: string
}
export interface genres {
    id: number,
    name: string,
    image_background: string,
    games: gamesData[]
}

export const UseGenres = () => UseData<genres>('/genres')
