import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import { FaGem, FaHeart} from "react-icons/fa";
import 'react-pro-sidebar/dist/css/styles.css';

export default function SideBar() {
  return(
  <ProSidebar>
    <SidebarHeader />
    <SidebarContent>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </SidebarContent>
    <SidebarFooter />
  </ProSidebar>
  );
}


