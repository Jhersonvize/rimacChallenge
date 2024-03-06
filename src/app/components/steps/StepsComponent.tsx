import { useLocation, useNavigate } from 'react-router-dom';
import './StepsComponent.scss';
import { useEffect, useState } from 'react';
import btnBack from '../../../assets/back-mobile.svg';
export const StepsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentStep = location.pathname;
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (currentStep === '/offers') {
      setStep(1);
    } else if (currentStep === '/resume') {
      setStep(2);
    }
  }, [currentStep]);
  const handleBack = () => {
    if (step === 1) {
      navigate('/');
    } else {
      navigate('/offers');
    }
  }
  return (
    <div>
      <nav className="steps">
        <section className={step === 1 ? 'offer--active' : 'offer'}>
          <span>1</span> Planes y coberturas
        </section>
        <section className="separador">- - -</section>
        <section className={step === 2 ? 'resume--active' : 'resume'}>
          <span>2</span> Resumen
        </section>
      </nav>
      <nav className="steps-mobile">
        <img className='steps-mobile__btn-back' src={btnBack} alt="" onClick={handleBack} />

        {(step === 1) ?
          <span> PASO 1 DE 2</span>
          : <span> PASO 2 DE 2</span>}
        <div className='steps-mobile__progress-bar'>
          <div className={step === 1 ? 'progress-bar--step1' : 'progress-bar--step2'}></div>
        </div>
      </nav>
    </div>
  );
};
