import { Avatar, Box, Typography } from "@mui/material";
import AvatarImg from "@/assets/avatar.png";
const SidebarUser = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, mb: 3 }}>
      <Avatar
        src={AvatarImg}
        sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
      />
      <Typography>Pradeep Kumar</Typography>
      <Typography>arya.creativemind@gmail.com</Typography>
      <Typography>Mob: 1234567890</Typography>
    </Box>
  );
};

export default SidebarUser;
