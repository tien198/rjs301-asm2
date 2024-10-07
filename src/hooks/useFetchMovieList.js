import { useEffect, useState } from 'react';

/**
 * @param {AsyncGeneratorFunction} fetchedFunc 
 * @param {Object} context - useContext or useState Object
 */
export function useFetchMovieListWithContext(fetchedFunc, context) {
    const { list, setList } = context
    useEffect(() => {
        (async function () {
            try {
                if (fetchedFunc) {
                    const res = (await fetchedFunc())['results']
                    setList(res)
                }
            }
            catch (err) {
                console.warn(err.message)
            }
        })()
    }, [fetchedFunc, setList])

    return {
        list, setList
    }
}

/**
 * @param {AsyncGeneratorFunction} fetchedFunc 
 */
export function useFetchMovieList(fetchedFunc, initialVal = []) {
    const [list, setList] = useState(initialVal)
    useEffect(() => {
        (async function () {
            try {
                const res = (await fetchedFunc())['results']
                setList(res)
            }
            catch (err) {
                console.warn(err.message)
            }
        })()
    }, [fetchedFunc, setList])

    return {
        list, setList
    }
}