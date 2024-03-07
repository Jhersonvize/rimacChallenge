import './RegisterPage.scss';
import hero from '../../../assets/hero.svg';
import FooterComponent from '../../components/footer/FooterComponent';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import blur1 from '../../../assets/blur-asset.svg';
import blur2 from '../../../assets/blur-asset2.svg';
import { RegisterForm } from '../../components/register-form/RegisterForm';

export const RegisterPage = () => {

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
          <div className='hero-container_mobile-section'>
            <article>
              <span className="hero-container__tag">Seguro Salud Flexible</span>
              <h1>
                <strong>Creado para ti y tu familia</strong>
              </h1>
            </article>
            <img className="hero-container__mobile-img" src={hero} alt="" />
          </div>
          <h4>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </h4>
          <RegisterForm />
        </section>
      </div>

      <FooterComponent />
    </div>
  );
};
