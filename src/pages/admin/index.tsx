import AdminSidebar from "@/components/admin/Sidebar";
import Container from "@mui/material/Container";
import useToggle from "@/hooks/useToggle";
import AdminHeader from "@/components/admin/Header";

const Admin = () => {
  const { open, handleClose, handleToggle } = useToggle(true);

  return (
    <>
      <AdminSidebar open={open} onClose={handleClose} />
      <main>
        <AdminHeader elevation={0} open={open} onOpen={handleToggle} />
        <Container>Admin</Container>
      </main>
    </>
  );
};

export default Admin;
