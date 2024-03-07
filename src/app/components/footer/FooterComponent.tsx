import './FooterComponent.scss'
import logowhite from '../../../assets/logo-white.svg'
const FooterComponent = () => {
  return (
    <footer className='footer-container'>
      <div className='logo'>
        <img src={logowhite} alt="" />
      </div>
      <div>
        <span>© 2023 RIMAC Seguros y Reaseguros.</span>
      </div>
    </footer>
  )
}

export default FooterComponent