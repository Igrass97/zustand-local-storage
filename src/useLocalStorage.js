import { useCallback } from 'react'
import create from 'zustand'

const initialInventory = {
    bears: 0
}

const getInitialStateFromLocalStorage = initialInventory => {
    let initialState = initialInventory

    for (let key in initialState) {
        const localStorageValue = localStorage.getItem(key)

        initialState[key] = localStorageValue || initialState[key]       
    }

    return initialState
}

const useLocalStorageStore = create(set => {
    const initialState = getInitialStateFromLocalStorage(initialInventory)

    return {
        ...initialState,
        setValue: (key, value) => {
            set({[key]: value})
            localStorage.setItem(key, value)
        }
    }
})

export const useReactiveLocalStorage = key => {
    const value = useLocalStorageStore(useCallback(state => state[key], [key]))
    const setStoreValue = useLocalStorageStore(state => state.setValue)

    const setValue = (newValue) => {
        setStoreValue(key, newValue)
    }

    return [value, setValue]
}
