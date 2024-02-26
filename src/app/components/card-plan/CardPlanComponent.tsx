import './CardPlanComponent.scss';
import { useDispatch } from 'react-redux';
import { IPlan } from '../../models/planModel';
import { setCurrentPlan } from '../../store/slices/plan/planSlice';
import { Link } from 'react-router-dom';
import home from '../../../assets/IcHomeLight.svg';
import hospital from '../../../assets/IcHospitalLight.svg';

export const CardPlanComponent = ({ list }: IPlan) => {
  const planDispatch = useDispatch();
  const handlePlan = (key: any) => {
    planDispatch(setCurrentPlan(list[key]));
  };
  return (
    <section className="plan-selection-container">
      {list.map((card, key) => {
        return (
          key < 3 && (
            <article key={key} className="plan-selection-container__card">
              <div
                className="plan-selection-container__tag"
                style={{ visibility: key !== 1 ? 'hidden' : 'visible' }}
              >
                Plan Recomendado
              </div>
              <div className="plan-selection-container__title">
                <span>{card.name}</span>
                <img
                  src={card.name.includes('Clínica') ? hospital : home}
                  alt=""
                />
              </div>

              <span>COSTO DEL PLAN</span>
              <del>$99 antes</del>
              <p>${card.price} al mes</p>
              <hr />
              <div>
                <ul className="plan-selection-container__description">
                  {card.description.map((d, k) => {
                    return <li key={k}>{d}</li>;
                  })}
                </ul>
              </div>
              <Link to="/resume">
                <button onClick={() => handlePlan(key)}>
                  Seleccionar Plan
                </button>
              </Link>
            </article>
          )
        );
      })}
    </section>
  );
};
