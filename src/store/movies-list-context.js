import { createContext, useState } from "react";

export const MovieListContext = createContext({
    categoryTitle: '', fetchFn() { },
    list: [], setList() { },
    activeItemIndex: {}, setActiveItemIndex() { },
    detailHeight: '', revealDetail() { }, hideDetail() { }
})

export function MovieListProvider({ children, categoryTitle, fetchFn }) {
    const [list, setList] = useState([])
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const [detailHeight, setDetailHeight] = useState('0px')
    function revealDetail() {
        setDetailHeight('500px')
    }
    function hideDetail() {
        setDetailHeight('0px')
    }
    const contextVals = {
        categoryTitle, fetchFn,
        list, setList,
        activeItemIndex, setActiveItemIndex,
        detailHeight, revealDetail, hideDetail
    }
    return (
        <MovieListContext.Provider value={contextVals}>
            {children}
        </MovieListContext.Provider>
    )
}