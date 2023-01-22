import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.KAKAO_REDIRECT} element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
