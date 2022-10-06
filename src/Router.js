import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from './Pages/Detail/Detail';
import Main from './Pages/Main/Main';

import GlobalStyles from './Styles/GlobalStyles';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme" element={<Main />} />
        <Route path="/detail/:themeId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
