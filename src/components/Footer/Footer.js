import s from './Footer.module.css';

function Footer () {
  return <footer class="footer">
  <span className={s.footer__text}>&copy; 2021 | All Rights Reserved |</span>
  <span className={s.footer__text}
    >Developed with GoIT Student
    </span>
</footer>;
}



export default Footer;