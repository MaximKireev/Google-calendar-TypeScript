export enum StorageVariables {
    CURRENT_THEME = 'CURRENT_THEME',
    EVENTS = 'EVENTS'
}


export const getListOfEventsFromLocalStorage = (key: StorageVariables) => {
    return JSON.parse(window.localStorage.getItem(key))
}

export const setListOfEventsToLocalStorage = (key: StorageVariables, value: string) => {
    return JSON.stringify( window.localStorage.setItem(key, value))
}
