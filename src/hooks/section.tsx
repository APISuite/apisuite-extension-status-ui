import React from "react";

const sections = {};

export default function hookSection(
  section: string,
  subsection: string,
  props?: object
) {
  const sectionEntry = sections[section];
  const Component = sectionEntry && sectionEntry[subsection];
  if (Component) {
    return <Component {...props} />;
  }
  return null;
}
