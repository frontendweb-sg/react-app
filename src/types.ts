type AppProps = {
  children?: React.ReactNode;
  className?: string;
};

interface IMenu {
  id: string | number;
  icon?: any;
  title: string;
  subtitle?: string;
  href?: string;
  type?: "group" | "item" | "collapse";
  children?: IMenu[];
}
