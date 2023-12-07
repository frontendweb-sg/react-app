import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { memo } from "react";
import { Button, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import { getUser } from "@/lib/auth";
import { IUser } from "@/services/auth.services";
/**
 * User control
 */
const UserControl = memo(function UserControl() {
  const user = getUser() as IUser;
  return (
    <Box>
      <Form method="post" action="/logout">
        <Button type="submit">
          <Avatar />
          <Typography>{user.email}</Typography>
        </Button>
      </Form>
    </Box>
  );
});

export default UserControl;
