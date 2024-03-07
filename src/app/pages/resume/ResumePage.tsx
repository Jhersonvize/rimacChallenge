import './ResumePage.scss';
import { useNavigate } from 'react-router-dom';
import { StepsComponent } from '../../components/steps/StepsComponent';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import backBtn from '../../../assets/Icon-button.svg';
import { CardResume } from '../../components/card-resume/CardResume';

export const ResumePage = () => {
  const navigate = useNavigate();
  const backOffer = () => {
    navigate('/offers');
  };
  return (
    <div>
      <HeaderComponent />
      <StepsComponent />
      <button className="offers-container__btn-back" onClick={backOffer}>
        <img src={backBtn} alt="" />
        Volver
      </button>
      <section className="resume-container">
        <div className="resume-container__title">Resumen del seguro</div>
        <CardResume />
      </section>
    </div>
  );
};
