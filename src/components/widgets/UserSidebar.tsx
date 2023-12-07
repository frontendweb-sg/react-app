import { memo } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import AvatarImg from "@/assets/avatar.png";
import { PhoneIphoneIcon } from "../icons";
import { getUser } from "@/lib/auth";
import { IUser } from "@/services/auth.services";

/**
 * Sidebar
 */
const SidebarUser = memo(function SidebarUser() {
  const user = getUser() as IUser;

  return (
    <Box sx={{ textAlign: "center", py: 5, px: 3 }}>
      <Avatar
        src={user.avatar ?? AvatarImg}
        sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
      />
      <Typography variant="h6">
        {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="caption">{user?.email}</Typography>
      {user?.mobile && (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="caption"
        >
          <PhoneIphoneIcon fontSize="small" /> {user.mobile}
        </Typography>
      )}
    </Box>
  );
});

export default SidebarUser;
