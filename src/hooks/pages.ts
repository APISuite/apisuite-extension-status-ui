import Status from "pages/Status";

const pagesConfig = [
  {
    auth: true,
    path: "/extensions/status-of-services",
    exact: true,
    component: Status,
  },
];

export default function hookPages() {
  return pagesConfig;
}