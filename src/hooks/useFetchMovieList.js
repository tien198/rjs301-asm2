import { useContext, useEffect } from 'react';

/**
 * @param {AsyncGeneratorFunction} fetchedFunc 
 */
export default function useFetchMovieList(context, fetchedFunc) {
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
