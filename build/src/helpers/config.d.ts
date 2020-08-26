import { ExtensionConfig } from "config";
interface Config {
    (): ExtensionConfig;
    set: (conf: any) => void;
}
declare const config: Config;
export default config;
