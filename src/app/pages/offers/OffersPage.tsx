import './OffersPage.scss';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import { StepsComponent } from '../../components/steps/StepsComponent';
import { Link } from 'react-router-dom';
import { IPlanList } from '../../models/planModel';
import { useSelector } from 'react-redux';
import { IUser } from '../../models/userModel';
import IcProtectionLight from '../../../assets/IcProtectionLight.svg';
import IcAddUserLight from '../../../assets/IcAddUserLight.svg';
import backBtn from '../../../assets/Icon-button.svg';
import { IStateSelector } from '../../models/selectorModel';
import { CardPlanComponent } from '../../components/card-plan/CardPlanComponent';
import { useMemo, useState } from 'react';
import { useApiPlan } from '../../hooks/useApiPlan';
const initialPersonTypeCard = [
  {
    img: IcProtectionLight,
    person: 'Para mí',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    isActive: false,
  },
  {
    img: IcAddUserLight,
    person: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    isActive: false,
  },
];
export const OffersPage = () => {
  useMemo(() => {
    initialPersonTypeCard.forEach(card => card.isActive=false)
  }, [])
  
  const { data } = useApiPlan();
  const [dataCards, setDataCards] = useState<IPlanList[]>([]);
  const [personTypeCard, setPersonTypeCard] = useState(initialPersonTypeCard);

  const userState = useSelector<IStateSelector>((state) => state.user) as IUser;
  const selectTypePerson = (key: number) => {
    if (data?.list) {
      setDataCards(data.list);
      const nextPersonTypeCard = personTypeCard.map((card, i) => {
        if (key === i && !card.isActive) {
          card.isActive = true;
        } else {
          card.isActive = false;
        }
        return card;
      });
      setPersonTypeCard(nextPersonTypeCard);
    }
  };

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
        <section className="card-person-container">
          {personTypeCard.map((data, key) => {
            return (
              <article
                className={
                  data.isActive
                    ? 'card-person-container__card--active'
                    : 'card-person-container__card'
                }
                onClick={() => selectTypePerson(key)}
                key={key}
              >
                <input
                  type="checkbox"
                  className="card-person-container__checkbox"
                  checked={data.isActive}
                  readOnly
                  name="check"
                />
                <img src={data.img} alt="nada" />
                <span>{data.person}</span>

                <p>{data.description}</p>
              </article>
            );
          })}
        </section>
        {dataCards.length > 0 &&
          personTypeCard.some((data) => data.isActive === true) && (
            <CardPlanComponent list={dataCards} />
          )}
      </div>
    </div>
  );
};
