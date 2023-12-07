import { Person } from "../icons";

export const UserMenu: IMenu[] = [
  {
    id: 1,
    title: "Pages",
    subtitle: "Visit to change data",
    type: "group",
    children: [
      {
        id: 1,
        title: "Dashboard",
        href: "/user",
        type: "item",
        icon: Person,
      },
      {
        id: 1,
        title: "Profile",
        href: "/user/profile",
        type: "item",
        icon: Person,
      },
    ],
  },
  {
    id: 2,
    title: "Settings",
    subtitle: "Visit to change data",
    type: "group",
    children: [
      {
        id: 1,
        title: "Change password",
        href: "/user/change-password",
        icon: Person,
        type: "item",
      },
    ],
  },
];
