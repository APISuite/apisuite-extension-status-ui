import { Layouts, HookPages, PageEntry } from "@apisuite/extension-ui-types";
import Status from "pages/Status";

const pagesConfig: PageEntry[] = [
  {
    auth: true,
    path: "/extensions/status-of-services",
    exact: true,
    layout: Layouts.Main,
    layoutProps: {
      contractibleMenu: false,
    },
    component: Status,
  },
];

const hookPages: HookPages = () => {
  return pagesConfig;
};

export default hookPages;
