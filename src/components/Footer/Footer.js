import heartPath from '../../images/heart.svg'
export default function Footer({ isOpen }) {
  return (
    <footer className={isOpen ? 'footer footer_loaded' : 'footer'}>
      <p className='footer__text'>Made with</p>
      <img src={heartPath} alt='сердце' />
      <p className='footer__text'>
        by
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.github.com/yozieb'
          className='footer__link'
        >
          YozieB
        </a>
      </p>
    </footer>
  )
}
