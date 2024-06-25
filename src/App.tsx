import { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import MainRouter from './router/MainRouter';

const App: FC = () => {
  return (
    <HashRouter>
      <Header />
      <div className='main'>
        <MainRouter />
      </div>
    </HashRouter>
  );
}

export default App;