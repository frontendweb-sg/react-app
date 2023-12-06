import AdminSidebar from "@/components/admin/Sidebar";
import useToggle from "@/hooks/useToggle";
import AdminHeader from "@/components/admin/Header";
import { Outlet } from "react-router-dom";
import { MainContainer } from "@/components/admin/style";

/**
 * Admin layout
 * @returns
 */
const Admin = () => {
  const { open, handleClose, handleToggle } = useToggle(true);
  return (
    <>
      <AdminSidebar open={open} onClose={handleClose} />
      <AdminHeader elevation={0} open={open} onOpen={handleToggle} />
      <MainContainer open={open}>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Admin;
