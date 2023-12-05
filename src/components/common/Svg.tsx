import { memo } from "react";

interface ISvgProps extends AppProps, React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

/**
 * Svg component
 * @param param0
 * @returns
 */
const Svg = memo(function Svg({
  children,
  viewBox = "0 0 24 24",
  size = "24",
  ...rest
}: ISvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      {...rest}
    >
      {children}
    </svg>
  );
});

export default Svg;
