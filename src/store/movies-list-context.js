import { createContext, useState } from "react";

export const MovieListContext = createContext({
    list: [],
    setList() { },
    activeItemIndex: {},
    setActiveItemIndex() { }
})

export function MovieListProvider({ children }) {
    const [list, setList] = useState([])
    const [activeItemIndex, setActiveItemIndex] = useState(0)

    const contextVals = {
        list, setList,
        activeItemIndex, setActiveItemIndex
    }
    return (
        <MovieListContext.Provider value={contextVals}>
            {children}
        </MovieListContext.Provider>
    )
}