import { Dashboard, Person, SvgIconComponent } from "@mui/icons-material";
export interface IMenu {
  id: string | number;
  icon?: SvgIconComponent;
  title: string;
  subtitle?: string;
  href?: string;
  type?: "group" | "item" | "collapse";
  children?: IMenu[];
}
export const AdminMenu: IMenu[] = [
  {
    id: 1,
    title: "Pages",
    subtitle: "page to perform actions",
    icon: Dashboard,
    type: "group",
    children: [
      {
        id: 1,
        title: "Dashbaord",
        href: "/admin",
        type: "item",
        icon: Dashboard,
      },
      {
        id: 3,
        title: "Category",
        href: "/admin/category",
        type: "item",
        icon: Dashboard,
      },
      {
        id: 4,
        title: "Color",
        href: "/admin/color",
        type: "item",
        icon: Dashboard,
      },
      {
        id: 5,
        title: "Settings",
        type: "item",
        href: "/settings",
        icon: Dashboard,
      },
      {
        id: 2,
        title: "Profile",
        icon: Dashboard,
        type: "collapse",
        children: [
          {
            id: 21,
            type: "item",
            title: "Change password",
            href: "/profile/change-password",
            icon: Person,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Settings",
    subtitle: "User setting options",
    icon: Person,
    type: "group",
    children: [
      {
        id: 21,
        title: "Profile",
        href: "/profile",
        type: "item",
      },
      {
        id: 22,
        title: "Change Password",
        href: "/change-password",
        type: "item",
      },
    ],
  },
];
