import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import adminIcon from '../images/adminIcon.png';
import '../App.css'

function Admin(){
  return(
    <div>
      <Header />
      <div>
          <SideBar/>
        <div className="icon-admin">
          <img src={adminIcon} style={{ width:250, height:250}} /> 
        </div>
      </div>
        <p style={{marginBottom:0}}><Footer /></p>
    </div>
  );
}
export default Admin;