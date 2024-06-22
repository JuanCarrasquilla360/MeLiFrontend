import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';

const App: FC = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </HashRouter>
  );
}

export default App;