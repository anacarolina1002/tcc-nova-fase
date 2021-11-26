import seta from '../images/seta.png'; 
import './Footer.css'

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

const Footer = () => {
  return (
      <div>
          <div className="footer-2">
              <div className="footer-text">
              Produzido por Ana Carolina Machado e Joel F. Da Silva
                <span className="back-to-top" onClick={scrollToTop}>
                  <img src={seta} style={{width:60, height:60}} />
                </span>
              </div>
    </div>
      </div>
    
  );
}

export default Footer;