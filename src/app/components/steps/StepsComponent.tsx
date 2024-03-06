import { useLocation } from 'react-router-dom';
import './StepsComponent.scss';
import { useEffect, useState } from 'react';
export const StepsComponent = () => {
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
    </div>
  );
};
