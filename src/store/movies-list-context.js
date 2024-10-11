import { createContext, useRef, useState } from "react";

export const MovieListContext = createContext({
    fetchFn() { },
    list: [], setList() { },
    youtubeUrlList: [],
    activeItemIndex: {}, setActiveItemIndex() { },
    detailHeight: '', revealDetail() { }, hideDetail() { }
})

export function MovieListProvider({ children, fetchFn, initialList = [] }) {
    const [list, setList] = useState(initialList)
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const [detailHeight, setDetailHeight] = useState('0px')
    const youtubeUrlList = useRef([])
    function revealDetail(height = '500px') {
        setDetailHeight(height)
    }
    function hideDetail() {
        setDetailHeight('0px')
    }
    const contextVals = {
        fetchFn,
        list, setList,
        youtubeUrlList,
        activeItemIndex, setActiveItemIndex,
        detailHeight, revealDetail, hideDetail
    }
    return (
        <MovieListContext.Provider value={contextVals}>
            {children}
        </MovieListContext.Provider>
    )
}