import { setupL10N, t } from "./libs/l10n";
import zhCN from "./translations/zhCN";

let pluginName: string;

export async function load(_name: string) {
  pluginName = _name;

  setupL10N(orca.state.locale, { "zh-CN": zhCN });

  // Your plugin code goes here.
  console.log(t("your plugin code starts here"));

  console.log(`${pluginName} loaded.`);
}

export async function unload() {
  // Clean up any resources used by the plugin here.
}
