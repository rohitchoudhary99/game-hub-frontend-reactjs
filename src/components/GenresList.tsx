import React from 'react'
import { UseGenres } from '../hooks/UseGenres'

export const GenresList = () => {
    const { genres, isLoading, error } = UseGenres()

    return (
        <>
            <ul>
                {
                    genres.map((ele) => <li> {ele.name}</li>)
                }
            </ul>
        </>
    )
}
