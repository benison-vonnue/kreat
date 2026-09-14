import type { Arguments } from "yargs";
import * as Sqrl from "squirrelly";
import path from "path";
import { createFile } from "../utils/write.js";
import { fileURLToPath } from "url";

// Recreate __dirname and __filename manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const command = "ReactComponent [componentName]";
export const desc = "Scaffolds a react component folder";
export const builder = {
  componentName: {
    default: "MyComponent",
    type: "string",
    describe: "Enter name of your React Component",
  },
  dir: {
    alias: "d",
    type: "string",
    default: "",
    describe: "Scaffold react component in that directory",
  },
};
export const handler = async function ({
  componentName,
  dir,
}: Arguments<{ componentName: string; dir: string }>) {
  const component = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/react-component/component.sqrl"),
    { componentName },
  );
  const css = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/react-component/css.sqrl"),
    { componentName },
  );
  const index = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/react-component/index.sqrl"),
    { componentName },
  );
  const scaffoldDir =
    dir !== "" ? `${dir}/${componentName}` : `${componentName}`;
  await createFile(`${componentName}.tsx`, component, { dir: scaffoldDir });
  await createFile(`${componentName}.module.css`, css, { dir: scaffoldDir });
  await createFile(`index.ts`, index, { dir: scaffoldDir });
  console.log("Created React Component Called", componentName);
};
