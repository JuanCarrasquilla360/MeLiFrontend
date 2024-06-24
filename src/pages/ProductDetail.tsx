import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductDetails } from '../interfaces/details';
import { useTranslation } from 'react-i18next';
import ProductDetailComponent from '../components/ProductDetailComponent';
import useAxios from '../hooks/useAxios';

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
    const axiosInstance = useAxios()
    const [error, setError] = useState<string | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`items/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(t("error"));
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>{t("loading")}...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>{t("product_not_found")}</div>;

    return (
        <ProductDetailComponent product={product} />
    );
}

export default ProductDetail;