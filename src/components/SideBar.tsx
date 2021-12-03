import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import {FiShoppingBag,FiUsers,FiBell,FiDollarSign} from "react-icons/fi";
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

import { useHistory } from 'react-router-dom';

export default function SideBar() {
  let history = useHistory();

  return(
  <ProSidebar>
    <SidebarHeader />
    <SidebarContent>
      <Menu iconShape="square">
        <MenuItem icon={<FiShoppingBag />} onClick={() => history.push('/admin-products')}>Produtos</MenuItem>
      </Menu>
    </SidebarContent>
    <SidebarFooter />
  </ProSidebar>
  );
}


