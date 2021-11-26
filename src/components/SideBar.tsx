import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import {FiShoppingBag,FiUsers,FiBell,FiDollarSign} from "react-icons/fi";
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

export default function SideBar() {
  return(
  <ProSidebar>
    <SidebarHeader />
    <SidebarContent>
      <Menu iconShape="square">
        <MenuItem icon={<FiDollarSign />}>Vendas</MenuItem>
        <MenuItem icon={<FiShoppingBag />}>Produtos</MenuItem>
        <MenuItem icon={<FiUsers />}>Clientes</MenuItem>
      </Menu>
    </SidebarContent>
    <SidebarFooter />
  </ProSidebar>
  );
}


