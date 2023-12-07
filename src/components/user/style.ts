import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";

/**
 * App bar
 */
export const AppBar = styled(MuiAppBar)(({ theme }) => ({}));

export const SidebarBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: 10,
  padding: 20,
}));
