import UseData from "./UseData";

export interface platform {
    id: number,
    name: string,
    slug: string
}

export const UsePlateform = () => UseData<platform>('/platforms/lists/parents')