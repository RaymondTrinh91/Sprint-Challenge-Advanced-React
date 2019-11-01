import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = url => {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios
            .get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
    },[url])
    return [data]
}

export default useAxios

