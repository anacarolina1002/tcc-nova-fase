import './CookieWindow.css';

const CookieComponent = () => {
  return (
    <div className="cookie-black-box">
      <div className="cookie-permission">
      Usamos cookies para personalizar e melhorar sua experiência em nosso site e aprimorar a oferta de anúncios para você. Visite nossa <a href='#'>Política de Cookies</a> para saber mais. Ao clicar em "continuar" você concorda com o uso que fazemos dos cookies
      </div>
      <div className="cookie-button">
          <button type='button'>CONTINUAR</button>
      </div>
    </div>
  );
}

export default CookieComponent;