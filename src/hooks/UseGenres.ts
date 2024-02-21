import UseData from "./UseData"

export interface genres {
    id: number,
    name: string,
    image_background: string,
}

export const UseGenres = () => UseData<genres>('/genres')
