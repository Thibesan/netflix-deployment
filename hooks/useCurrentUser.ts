import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const useCurrentUser = () => {
    //swr will prevent refetching of existing data, removes need for React Redux w/ state management
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)
    
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser