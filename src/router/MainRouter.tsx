import { Routes, Route } from 'react-router-dom';
import SearchResults from '../pages/SearchResults'
import ProductDetail from '../pages/ProductDetail'
import NotFound from '../components/NotFound'
import Home from '../components/Home';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items/:id" element={<ProductDetail />} />
            <Route path="/items" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainRouter