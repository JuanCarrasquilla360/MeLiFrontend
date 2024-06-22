import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.mercadolibre.com/items/${id}`)
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
        <div>
            <h1>{product.title}</h1>
            <p>Precio: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
        </div>
    );
}

export default ProductDetail;