import { Item } from '../interfaces/results'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../helper/formatter'
import { CiDeliveryTruck } from 'react-icons/ci'

const SearchResult = ({ product }: {product: Item}) => {
    const navigate = useNavigate()
    return (
        <li onClick={() => navigate(`/items/${product.id}`)}>
            <div className='picture'>
                <img src={product.picture} alt="" />
            </div>
            <div className='info'>
                <div className='price'>
                    ${formatCurrency(product.price.amount)}
                    {product.free_shipping && (
                        <CiDeliveryTruck size={10} style={
                            {
                                backgroundColor: "#00a650",
                                borderRadius: "50%",
                                padding: "2px",
                                marginLeft: "5px"
                            }
                        } />
                    )}
                </div>
                <div className='title'>
                    <p>
                        {product.title}
                    </p>
                </div>
            </div>
            <div className='seller'>
                <p>
                    {product.seller}
                </p>
            </div>
        </li>
    )
}

export default SearchResult