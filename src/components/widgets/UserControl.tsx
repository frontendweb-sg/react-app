import Avatar from "@mui/material/Avatar";

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
  const fName = user?.firstName?.substring(0, 1);
  const lName = user.lastName?.substring(0, 1);
  return (
    user && (
      <Form method="post" action="/logout">
        <Button type="submit">
          <Avatar />
          {fName && lName && (
            <Typography>
              {fName}
              {lName}
            </Typography>
          )}
        </Button>
      </Form>
    )
  );
});

export default UserControl;
