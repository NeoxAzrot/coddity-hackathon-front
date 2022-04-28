import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from 'pages/404';
import Home from 'pages/home';
import Quiz from 'pages/quiz';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:slug" element={<Quiz />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
