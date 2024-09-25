import { useEffect, useState } from 'react';

/**
 * @param {AsyncGeneratorFunction} fetchedFunc 
 */
export default function useFetchMovieList(initialVal, fetchedFunc) {
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
    }, [fetchedFunc])

    return {
        list, setList
    }
}
