const menuConfig = {
  footer: {},
  headerAnonymous: [],
  headerAuthenticated: {
    main: [
      {
        label: "Status of Services",
        route: "/extensions/status-of-services",
      },
    ],
  },
};

export default function hookMenu(menu: string, section?: string) {
  let menuEntry = menuConfig[menu];
  if (menuEntry && section) {
    menuEntry = menuEntry[section];
  }
  return menuEntry;
}
