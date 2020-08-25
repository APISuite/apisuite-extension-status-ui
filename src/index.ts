import { Extension } from "apisuite-extension-ui-types";
import "./translations";
import hooks from "./hooks";
import { ExtensionConfig } from "config";
import configHelper from "./helpers/config";
import { name, version } from "../package.json";

class StatusExtension extends Extension {
  static info = {
    name,
    version,
  };

  public config: ExtensionConfig;

  hooks = hooks;

  constructor(config?: ExtensionConfig) {
    super(config);
    configHelper.set(config);
  }
}

export default StatusExtension;
