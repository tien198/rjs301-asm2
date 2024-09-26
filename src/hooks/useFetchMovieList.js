import { useContext, useEffect, useState } from 'react';

/**
 * @param {AsyncGeneratorFunction} fetchedFunc 
 */
export function useFetchMovieListWithContext(fetchedFunc, context) {
    const { list, setList } = useContext(context)
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