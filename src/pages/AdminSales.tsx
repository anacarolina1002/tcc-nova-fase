import "typeface-roboto";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import adminIcon from '../images/adminIcon.png';
import '../App.css'

function Sales(){
  return(
    <div>
      <Header />
      <div className="sale-boxes">

            <div className="sale-box">
            
            </div>
            
            <div className="sale-box-1">
    
            </div>
            <div className="sale-box-2">
                
            </div>
            <div className="sale-box-3">
                
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div className="sale-box-1"></div>

                <div className="sale-box-1"></div>

                <div className="sale-box-1"></div>

                <div className="sale-box-1"></div>
            </div>
      </div>
      
          <SideBar/>
      
        <p style={{marginBottom:0}}><Footer /></p>
    </div>
  );
}
export default Sales;