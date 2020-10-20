import { Extension, ExtensionParams } from "@apisuite/extension-ui-types/v1";
import "./translations";
import hooks from "./hooks";
import { ExtensionConfig } from "./config";
import configHelper from "./helpers/config";
import { name, version } from "../package.json";

export type StatusExtensionParams = ExtensionParams & {
  config?: ExtensionConfig
}

class StatusExtension extends Extension {
  static info = {
    name,
    version,
    protocolVersion: "1",
  };

  public config: ExtensionConfig;

  hooks = hooks;

  constructor({ core, config }: StatusExtensionParams) {
    super({ core, config });
    configHelper.set(config);
  }
}

export default StatusExtension;
