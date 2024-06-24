import { ProductDetails } from '../interfaces/details'
import Breadcrumbs from './Breadcrumbs'
import { formatCurrency } from '../helper/formatter'
import { useTranslation } from 'react-i18next'

const ProductDetailComponent = ({ product }: { product: ProductDetails }) => {
    const { t } = useTranslation();
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
                        <p>{product.item.condition === "new" ? t("new") : t("used")} - {product.item.items_sold} {product.item.items_sold === 1 ? t("sold") : t("sold_plural")}</p>
                        <h1>{product.item.title}</h1>
                        <h1>${formatCurrency(product.item.price.amount)}</h1>
                        <button className='button'>{t("buy")}</button>
                    </div>
                </div>
                <div className='description'>
                    <h1>{t("product_description")}</h1>
                    <p>{product.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent