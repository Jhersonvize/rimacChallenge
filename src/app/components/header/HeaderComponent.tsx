import './HeaderComponent.scss';
import logo from '../../../assets/logo.svg';
import telephone from '../../../assets/telephone.svg';

export const HeaderComponent = () => {
  return (
    <nav className="header-container">
      <div className="header-container__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-container__info">
        <span className='header-container__text'>¡Compra por este medio!</span>
        <div>
          <img src={telephone} alt="phone" />
          <span className='header-container__number'>(01) 411 6000</span>
        </div>
      </div>
    </nav>
  );
};
