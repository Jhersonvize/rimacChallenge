import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../pages/register/RegisterPage';
import { ResumePage } from '../pages/resume/ResumePage';
import { OffersPage } from '../pages/offers/OffersPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
