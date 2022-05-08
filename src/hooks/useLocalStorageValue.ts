import { stringify } from 'querystring'
import React from 'react'

let initialStorageValue: string = window.localStorage.getItem('event')

export const useLocalStorageValue = (key, initialValue = initialStorageValue) => {

    const [value, setValue] = React.useState<string>(initialValue)

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue]
}