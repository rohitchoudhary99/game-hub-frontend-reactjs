import apiClient from "../services/api-client";
import UseData from "./UseData";

export interface fetchPlatformResponse {
    id: number,
    name: string,
    slug: string
}

export const UsePlateform = () => UseData<fetchPlatformResponse>('/platforms/lists/parents')