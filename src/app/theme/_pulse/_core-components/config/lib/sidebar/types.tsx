// import { IconNameOptions } from "@/app/pulse/pulse-home/_components/icon";

import { IconNameOptions } from "../../../icon";

export type SidebarItemType = {
  title: string;
  href: string;
  icon: IconNameOptions;
  path: string;
  startOfSection?: boolean;
  sectionTitle?: string;
};
