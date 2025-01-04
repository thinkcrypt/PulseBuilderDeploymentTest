import { SidebarItemType } from "./types";

const sidebar: SidebarItemType[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: "home",
    path: "dashboard",
  },

  {
    startOfSection: true,
    sectionTitle: "Admin Management",
    title: "Roles",
    href: "/roles",
    icon: "role",
    path: "roles",
  },
  {
    sectionTitle: "Users",
    title: "Users",
    href: "/users",
    icon: "user",
    path: "users",
  },

  {
    startOfSection: true,
    sectionTitle: "Content (HONGO-Temporary for this night)",
    title: "Store",
    href: "/hongo/hongo-store",
    icon: "shop",
    path: "hongo/hongo-store",
  },

  {
    title: "Home",
    href: "/hongo/hongo-home",
    icon: "content",
    path: "hongo/hongo-home",
  },
  {
    startOfSection: true,
    sectionTitle: "Pages (PULSE)",
    title: "Home Page",
    href: "/pulse/pulse-home",
    icon: "content",
    path: "pulse",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: "settings-fill",
    path: "settings",
  },
];

export default sidebar;
