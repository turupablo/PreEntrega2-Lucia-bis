import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    const props = useParams()
    const categoria = props.categoria
    console.log(props)


    useEffect(() => {

        setLoad(false)
        const pedido = fetch("https://fakestoreapi.com/products/")
        
        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                if (props.categoria == null) {
                    setProductos(productos)
                } else {
                    setProductos(productos.filter(p => p.category === props.categoria))
                }
            setLoad(true)

            })
            .catch((error) => {
                console.log(error)
            })

    }, [props.categoria])

    return (
        <>
            {load ? null : <div className="text-center text-warning">Cargando</div>}
            <ItemList productos={productos}/>
        </>
    )
}


export default ItemListContainer