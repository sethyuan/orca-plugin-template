let pluginName: string;

export async function load(_name: string) {
  pluginName = _name;

  // Your plugin code goes here.

  console.log(`${pluginName} loaded.`);
}

export async function unload() {
  // Clean up any resources used by the plugin here.
}
