import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import '../App.css'

function AdminClients(){
  return(
    <div>
      <Header />
          <SideBar/>
          <button className="remove-button">Remover</button>    
        <p style={{marginBottom:0}}><Footer /></p>
    </div>
  );
}
export default AdminClients;