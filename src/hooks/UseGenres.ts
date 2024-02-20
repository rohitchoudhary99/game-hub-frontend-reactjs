import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import UseData from "./UseData"

interface genres {
    id: number,
    name: string
}

 const UseGenres = () => UseData<genres>('/genres')

 export default UseGenres