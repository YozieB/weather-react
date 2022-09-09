import logo from '../../images/logo.svg'
export default function Header({ isOpen }) {
  return (
    <header className={isOpen ? 'header header_loaded' : 'header'}>
      <a
        href='https://www.github.com/yozieb/weather-react'
        target='_blank'
        rel='noreferrer'
      >
        <img src={logo} alt='Логотип' />
      </a>
    </header>
  )
}
