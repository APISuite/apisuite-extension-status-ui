import { Menus, MenuEntry, HookMenu } from "@apisuite/extension-ui-types";

type MenuConfig = {
  [menu: string]: MenuEntry[];
};

const menuConfig: MenuConfig = {
  [Menus.HeaderAuthenticatedMain]: [
    {
      label: "Status",
      route: "/extensions/status-of-services",
    }
  ]
};

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null;
};

export default hookMenu;
