import React, {useCallback, useState} from 'react';
import axios from 'axios'

function useFetchApi(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [cancel, setCancel] = useState('')
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [error, setError] = useState([])


    const getAll = useCallback(async () => {
        setLoading(true)
        axios.get(url).then(response => {
            response.data['hydra:member'] ? setData(response.data['hydra:member']) : setData(response.data)
            setTotalItems(response.data['hydra:totalItems'])
            setLoading(false)
        }).catch((error) => {
            let response = error.response.data
            response.message && window.notification('error', 'Erreur', response.message)
            response.title && window.notification('error', response.title, response.detail)
            setLoading(false)
        })
    }, [url])

    const postData = useCallback(async (sendData) => {
        setLoading(true)
        axios.post(url, sendData).then(response => {
            setData([...data, response.data]);
            setLoading(false)
        }).catch((error) => {
            let response = error.response.data
            response.message && window.notification('error', 'Erreur', response.message)
            response.title && window.notification('error', response.title, response.detail)
            setLoading(false)
        })
    }, [url])

    const validateData = useCallback(async (sendData) => {
        setLoading(true)
        axios.post(url, sendData).then(response => {
            setLoading(false)
        }).catch((error) => {
            let response = error.response.data
            response.message && window.notification('error', 'Erreur', response.message)
            response.title && window.notification('error', response.title, response.detail)
            setLoading(false)
        })
    }, [url])

    const searchData = useCallback(async (q = null) => {
        setLoading(true)
        {
            cancel && cancel.cancel()
        }
        setCancel(axios.CancelToken.source());

        axios.get(url + q, {cancelToken: cancel.token})
            .then(response => {
                response.data['hydra:member'] ? setData(response.data['hydra:member']) : setData(response.data)
                setTotalItems(response.data['hydra:totalItems'])
                setQuery(q)
                setLoading(false)
            }).catch((error) => {
            let response = error.response.data
            response.message && window.notification('error', 'Erreur', response.message)
            response.title && window.notification('error', response.title, response.detail)
            setLoading(false)
        })
    }, [url])

    const paginateTo = useCallback(async (number = 1) => {
        setLoading(true)
        let dataPaginator = '';
        {
            query.length > 0 ? dataPaginator = `${query}&page=${number}` : dataPaginator = `?page=${number}`
        }
        axios.get(url + dataPaginator, {cancelToken: cancel.token})
            .then(response => {
                response.data['hydra:member'] ? setData(response.data['hydra:member']) : setData(response.data)
                setLoading(false)
            }).catch((error) => {
            let response = error.response.data
            response.message && window.notification('error', 'Erreur', response.message)
            response.title && window.notification('error', response.title, response.detail)
            setLoading(false)
        })
    }, [url])

    return {
        data,
        loading,
        getAll,
        postData,
        searchData,
        paginateTo,
        totalItems,
        validateData,
        error
    }
}

export default useFetchApi;
