import './OffersPage.scss';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import { StepsComponent } from '../../components/steps/StepsComponent';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IUser } from '../../models/userModel';
import backBtn from '../../../assets/Icon-button.svg';
import { IStateSelector } from '../../models/selectorModel';
import { CardTypePerson } from '../../components/card-type-person/CardTypePerson';

export const OffersPage = () => {
  const userState = useSelector<IStateSelector>((state) => state.user) as IUser;

  return (
    <div>
      <HeaderComponent />
      <StepsComponent />
      <div className="offers-container">
        <Link to="/">
          <button className="offers-container__btn-back">
            <img src={backBtn} alt="" />
            Volver
          </button>
        </Link>

        <div className="offers-container__initial-message">
          <h1> {userState?.name} ¿Para quién deseas cotizar?</h1>
          <span>Selecciona la opción que se ajuste más a tus necesidades.</span>
        </div>
        <CardTypePerson />
      </div>
    </div>
  );
};
