import Typography from "@mui/material/Typography";
import { useTheme } from "@/theme";
import { IMenu } from "@/utils/menus";

/**
 * Sub header component
 * @returns
 */
const SubHeader = ({ menu }: { menu: IMenu }) => {
  const { palette } = useTheme();
  return (
    <>
      <Typography
        color={palette.grey[500]}
        textTransform="uppercase"
        mb={2}
        sx={{ "&:hover": { color: palette.grey[800] } }}
        variant="subtitle1"
        display="block"
        gutterBottom
      >
        {menu.title}
        {menu.subtitle && (
          <Typography
            textTransform="lowercase"
            variant="caption"
            display="block"
            gutterBottom
          >
            {menu.subtitle}
          </Typography>
        )}
      </Typography>
    </>
  );
};

export default SubHeader;
