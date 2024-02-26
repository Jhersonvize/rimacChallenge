import './ResumePage.scss';
import { useNavigate } from 'react-router-dom';
import { StepsComponent } from '../../components/steps/StepsComponent';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import backBtn from '../../../assets/Icon-button.svg';
import { useSelector } from 'react-redux';
import userIcon from '../../../assets/gl_family-24x24.svg';
import { IStateSelector } from '../../models/selectorModel';
import { IUser } from '../../models/userModel';
import { IPlanList } from '../../models/planModel';

export const ResumePage = () => {
  const navigate = useNavigate();
  const backOffer = () => {
    navigate('/offers');
  };
  const userState = useSelector<IStateSelector>((state) => state.user) as IUser;
  const planState = useSelector<IStateSelector>(
    (state) => state.plan
  ) as IPlanList;
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
        <article className="card-resume">
          <span>PRECIOS CALCULADOS PARA:</span>
          <div className="card-resume__user-info">
            <img src={userIcon} alt="" />
            <span>{userState.name + ' ' + userState.lastName}</span>
          </div>

          <hr />
          <span className="card-resume__title">Responsable de pago</span>
          <span className="card-resume__text">
            {userState.typeDocument + ': ' + userState.documentNumber}
          </span>
          <span className="card-resume__text">
            {'Celular: ' + userState.documentNumber}
          </span>
          <br />
          <span className="card-resume__title">Plan elegido</span>
          <span className="card-resume__text">{planState.name}</span>
          <span className="card-resume__text">
            Costo del Plan ${planState.price} al mes
          </span>
        </article>
      </section>
    </div>
  );
};
