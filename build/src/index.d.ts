import { Extension } from "apisuite-extension-ui-types";
import "./translations";
import { ExtensionConfig } from "./config";
declare class StatusExtension extends Extension {
    static info: {
        name: string;
        version: string;
    };
    config: ExtensionConfig;
    hooks: import("apisuite-extension-ui-types").Hooks;
    constructor(config?: ExtensionConfig);
}
export default StatusExtension;
