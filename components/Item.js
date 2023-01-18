import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article key={producto.id} className="product-card">
            <div class="row justify-content-center p-5">
                <div class="card shadow carta-contenedor bg-body rounded text-center ">
                    <h6 className="product-card__title">{producto.title}</h6>
                    <img className="product-card__image img-fluid" src={`https://picsum.photos/200/300?random=${producto.id}`} alt={producto.title} />
                    <p class="text-primary">${producto.price}</p>
                    <Link to={"/item/"+producto.id}> <button class="btn btn-secondary">Mas</button> </Link>
                </div>
            </div>
        </article>
    )
}

export default Item