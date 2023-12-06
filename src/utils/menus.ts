import { Dashboard, Person, SvgIconComponent } from "@mui/icons-material";
export interface IMenu {
  id: string | number;
  icon: SvgIconComponent;
  title: string;
  subtitle?: string;
  href?: string;
  type?: "group" | "single" | "collapse";
  children?: IMenu[];
}
export const AdminMenu: IMenu[] = [
  {
    id: 1,
    title: "Dashbaord",
    href: "/",
    icon: Dashboard,
  },
  {
    id: 2,
    label: "Profile",
    icon: Dashboard,
    type: "group",
    children: [
      {},
      {
        id: 21,
        label: "Change password",
        href: "/profile/change-password",
        icon: Person,
      },
    ],
  },
  {
    id: 3,
    label: "Category",
    href: "/category",
    icon: Dashboard,
  },
  {
    id: 4,
    label: "Color",
    href: "/color",
    icon: Dashboard,
  },
  {
    id: 5,
    label: "Settings",
    href: "/settings",
    icon: Dashboard,
  },
];
