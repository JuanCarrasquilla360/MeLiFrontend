import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductDetails } from '../interfaces/details';
import Breadcrumbs from '../components/Breadcrumbs';
import { formatCurrency } from '../helper/formatter';

const initialValues: ProductDetails = {
    author: {
        name: "",
        lastname: ""
    },
    item: {
        id: "",
        condition: "",
        description: "",
        free_shipping: false,
        picture: "",
        price: {
            amount: 0,
            currency: "",
            decimals: 0
        },
        title: "",
        categories: [],
        items_sold: 0
    }
}

const ProductDetail: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetails>(initialValues);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const baseUrl = "http://localhost:3000"

    useEffect(() => {
        setLoading(true);
        axios.get(`${baseUrl}/items/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error al cargar el producto');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Producto no encontrado</div>;

    return (
        <div className='ui-details'>
            <div className='breadcrums-container'>
                <Breadcrumbs items={product.item.categories} />
            </div>
            <div className='product-detail-container'>
                <div className='picture-price'>
                    <div className='picture'>
                        <img src={product.item.picture} alt={product.item.title} />
                    </div>
                    <div className='price-info'>
                        <p>{product.item.condition === "new" ? "Nuevo" : "Usado"} - {product.item.items_sold} {product.item.items_sold === 1 ? "vendido" : "vendidos"}</p>
                        <h1>{product.item.title}</h1>
                        <h1>${formatCurrency(product.item.price.amount)}</h1>
                        <button className='button'>Comprar</button>
                    </div>
                </div>
                <div className='description'>
                    <h1>Descripción del producto</h1>
                    <p>{product.item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;