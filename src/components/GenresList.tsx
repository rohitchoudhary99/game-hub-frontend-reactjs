import React from 'react'
import UseGenres from '../hooks/UseGenres'

export const GenresList = () => {
    const {data, isLoading, error  } = UseGenres()

    return (
        <>
            <ul>
                {
                    data.map((ele) => <li> {ele.name}</li>)
                }
            </ul>
        </>
    )
}
