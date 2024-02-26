import './RegisterPage.scss';
import hero from '../../../assets/hero.svg';
import FooterComponent from '../../components/footer/FooterComponent';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import { useApiUser } from '../../hooks/useApiUser';
import { useDispatch } from 'react-redux';
import { ChangeEvent, FormEvent, useReducer } from 'react';
import { currentUser } from '../../store/slices/user/userSlice';
import { IFormUser, IFormUserAction } from '../../models/formUserModel';
import blur1 from '../../../assets/blur-asset.svg';
import blur2 from '../../../assets/blur-asset2.svg';

const initialForm: IFormUser = {
  typeDocument: 'DNI',
  documentNumber: '',
  phoneNumber: '',
};

const reducerForm = (
  state: IFormUser,
  { type, field, payload }: IFormUserAction
) => {
  switch (type) {
    case 'inputChange':
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};
export const RegisterPage = () => {
  const navigate = useNavigate();
  const { data, error } = useApiUser();
  const userDispatch = useDispatch();
  const [stateForm, dispatchForm] = useReducer(reducerForm, initialForm);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!error) {
      userDispatch(currentUser({ ...data, ...stateForm }));
      navigate('/offers');
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    dispatchForm({
      type: 'inputChange',
      field: e.target.name,
      payload: e.target.value,
    });
  };
  return (
    <div>
      <HeaderComponent />
      <div className="hero-container">
        <img className="hero-container--blur1" src={blur1} alt="" />
        <img className="hero-container--blur2" src={blur2} alt="" />
        <section>
          <img className="hero-container__first-section" src={hero} alt="" />
        </section>
        <section className="hero-container__second-section">
          <span className="hero-container__tag">Seguro Salud Flexible</span>
          <h1>
            <strong>Creado para ti y tu familia</strong>
          </h1>
          <h4>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </h4>
          <form onSubmit={handleSubmit} className="form-section">
            <div className="form-section__document">
              <select name="typeDocument" onChange={handleChange}>
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
              </select>
              <div className="form-section__input-container">
                <input
                  className="form-section__input-text--half"
                  type="number"
                  name="documentNumber"
                  value={stateForm.documentNumber}
                  onChange={handleChange}
                  id="documentNumber"
                  required
                />
                <label
                  htmlFor="documentNumber"
                  className={
                    stateForm.documentNumber
                      ? 'form-section__input-container--filled'
                      : 'form-section__input-container--empty'
                  }
                >
                  Nro de Documento
                </label>
              </div>
            </div>
            <div className="form-section__input-container">
              <input
                className="form-section__input-text"
                type="number"
                name="phoneNumber"
                value={stateForm.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
                required
              />
              <label
                htmlFor="phoneNumber"
                className={
                  stateForm.phoneNumber
                    ? 'form-section__input-container--filled'
                    : 'form-section__input-container--empty'
                }
              >
                Nro de Celular
              </label>
            </div>

            <div className="form-section__document">
              <input
                className="form-section__checkbox"
                type="checkbox"
                name="check1"
                id="check1"
                required
              />
              <label className="form-section__label" htmlFor="check1">
                Acepto lo Política de Privacidad
              </label>
            </div>
            <div className="form-section__document">
              <input
                className="form-section__checkbox"
                type="checkbox"
                name="check2"
                id="check2"
                required
              />
              <label className="form-section__label" htmlFor="check2">
                Acepto la Política Comunicaciones Comerciales
              </label>
            </div>
            <a href="/" className="form-section__terms">
              Aplican Términos y Condiciones.
            </a>
            <button type="submit">Cotiza Aqui</button>
          </form>
        </section>
      </div>

      <FooterComponent />
    </div>
  );
};
