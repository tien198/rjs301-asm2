import { useEffect, useState } from 'react';

/**
 * @param {AsyncGeneratorFunction} fetchedFunc 
 */
export default function useFetchMovieList(initialVal, fetchedFunc) {
    const [list, setList] = useState(initialVal)
    useEffect(() => {
        (async function () {
            const res = (await fetchedFunc())['results']
            setList(res)
        })()
    }, [fetchedFunc])

    return {
        list, setList
    }
}
