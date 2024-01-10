import _ from "lodash";
import { NavItemType } from "@/shared/Navigation/NavigationItem";

const ncNanoId = _.uniqueId;

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/home",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Search page",
  },
  {
    id: ncNanoId(),
    href: "/interests",
    name: "My Interests",
  },
  {
    id: ncNanoId(),
    href: "/recommendations",
    name: "Reccommendations",
  },
  {
    id: ncNanoId(),
    href: "/myReviews",
    name: "My Reviews",
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Discover",
    type: "dropdown",
    children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/upload-item",
    name: "Help center",
  },
];
