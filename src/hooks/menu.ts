const menuConfig = {
  footer: {},
  headerAnonymous: [],
  headerAuthenticated: {},
};

export default function hookMenu(menu: string, section?: string) {
  let menuEntry = menuConfig[menu];
  if (menuEntry && section) {
    menuEntry = menuEntry[section];
  }
  return menuEntry;
}
