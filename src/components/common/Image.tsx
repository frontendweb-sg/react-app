import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import { memo } from "react";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  boxProps?: BoxProps;
};

const Image = memo(function Image({ src, alt, boxProps, ...rest }: ImageProps) {
  return (
    <Box {...boxProps}>
      <img src={src} alt={alt} {...rest} />
    </Box>
  );
});

export default Image;
