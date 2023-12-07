import { SidebarBox } from "./style";
import SidebarUser from "../widgets/UserSidebar";
import CustomMenu from "../common/CustomMenu";
import { UserMenu } from "./menu";

/**
 * User sidebar
 * @returns
 */
const UserSidebar = () => {
  return (
    <SidebarBox>
      <SidebarUser />

      <CustomMenu menus={UserMenu} />
    </SidebarBox>
  );
};

export default UserSidebar;
