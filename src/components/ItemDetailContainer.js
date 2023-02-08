import {React, useEffect, useState} from 'react'
import { useParams  } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

const ItemDetailContainer = () => {
    const params = useParams()
    console.log(params.id)

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])


    useEffect(() => {


        const pedido = fetch("https://fakestoreapi.com/products/")

        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <>
            {load ? null : 'Cargando...'}
            <ItemDetail productos={productos}/>
        </>
    )
}

export default ItemDetailContainer
