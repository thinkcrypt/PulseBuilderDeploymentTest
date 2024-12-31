import { border } from "@chakra-ui/react";

export const TOKEN_NAME: string =
  process.env.NEXT_PUBLIC_TOKEN_NAME || "MINT_CAFE_TOKEN_TWO";

export const REFRESH_TOKEN: string =
  process.env.REFRESH_TOKEN || "THINKCRYPT_ERP_REFRESH_TOKEN_TEST_ONE";

export const STORE: string =
  process.env.NEXT_PUBLIC_STORE || "6587157f9b62eb0e74c9f2ef";

export const CART_NAME: string =
  process.env.NEXT_PUBLIC_CART_NAME || "THINKCRYPT_ERP_CART_TEST_ONE";

export const PLACEHOLDER_IMAGE =
  process.env.PLACEHOLDER_IMAGE ||
  "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais";

export const URL = {
  backend: process.env.NEXT_PUBLIC_BACKEND || "http://localhost:5000",
  api: process.env.NEXT_PUBLIC_BACKEND || "http://localhost:5000",
};

export const currency = {
  code: "BDT",
  symbol: "৳",
};

export const productCardBoxShadow = "0px 0px 6px -3px rgb(0, 0, 0, .2)";
export const cartBoxShadowHover = "0 2px 5px rgba(0, 0, 0, 0.1);";

export const placeholderLogo = "./logo/placeholderImage.png";

const BASE_SIDEBAR_WIDTH = "240px";
const BASE_SIDEBAR_WIDTH_SMALL = "20PX";

export const PADDING_X = { base: 6, md: 24 };

export const sizes = {
  SIDEBAR_WIDTH: BASE_SIDEBAR_WIDTH,
  HOME_NAV_MAX_WIDTH: `calc(100vw - ${BASE_SIDEBAR_WIDTH})`,
  HOME_NAV_SMALL_SCREEN_WIDTH: `calc(100vw - ${"20px + 32px"})`,
  HOME_NAV_LEFT: BASE_SIDEBAR_WIDTH,
  PADDING_X_BASE: 4,
  PADDING_X_MD: 6,
  PADDING_X_LG: 6,
  POPOVER_WIDTH: "260px",
  RADIUS_MENU: "lg",
  POS_MAX_HEIGHT: "75vh",
  POS_RATIO: "8fr 2fr",
  POS_RATIO_BASE: "6fr 1fr",
  NAV_HEIGHT: 14,
  CARD_RADIUS: "8px",
  SIDEBAR_PX: 3,
};

export const shadow = {
  MENU: "lg",
  CARD: "2px 2px 10px rgba(0,0,0,.1)",
  DASH: "2px 2px 4px rgba(0,0,0,.05)",
};
export const maxWidth = {
  base: "100%",
  xl: "1140px",
  "2xl": "1320px",
};

export const cartBoxShadow = "0px 0px 8px -4px rgb(0, 0, 0)";

export const sectionPadding = {
  PADDING_X_2XL: "18rem",
  PADDING_X_LG: "12rem",
  PADDING_X_MOBILE: "1rem",
};

export const padding = {
  BASE: sizes.PADDING_X_BASE,
  MD: sizes.PADDING_X_MD,
  LG: sizes.PADDING_X_LG,
  CONTAINER: {
    BASE: 4,
    MD: 8,
    LG: 8,
  },
};

export const styles = {
  bigInput: {
    borderRadius: "6px",
    _light: {
      borderColor: "container.borderLight",
    },
  },
};

export const navbarBoxShadow = "0px 8px 9px -14px rgb(0, 0, 0)";

export const radius = {
  CONTAINER: "8px",
  MODAL: "8px",
  BUTTON: "6px",
  INPUT: "6px",
  SELECT_CONTAINER: "6px",
};

export const zIndex = {
  NAV: 999,
  SIDEBAR: 999,
  header: "999",
  navbar: "1000",
  navbarDropdown: "1100",
  navbarSubDropdown: "1200",
  hero: "777",
  contact: "666",
};

export const BASE_LIMIT = 16;

export const THEME: "basic" | "fancy" = "basic";
