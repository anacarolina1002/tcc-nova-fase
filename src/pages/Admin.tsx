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
      <div className="min-h-screen">
        <SideBar/>
        <div className="icon-admin min-h-screen">
          <img src={adminIcon} style={{ width:250, height:250}} /> 
        </div>
      </div>
        <div><Footer /></div>
    </div>
  );
}
export default Admin;