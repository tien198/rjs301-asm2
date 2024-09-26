import { createContext, useState } from "react";

export const MovieListListContext = createContext({
    list: [],
    setList() { }
})

export function MovieListProvider({ children }) {
    const [list, setList] = useState([])

    const contextVals = {
        list, setList
    }
    return (
        <MovieListListContext.Provider value={contextVals}>
            {children}
        </MovieListListContext.Provider>
    )
}