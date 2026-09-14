import type { Arguments } from "yargs";
import * as Sqrl from "squirrelly";
import path from "path";
import { createFile } from "../utils/write.js";
import { fileURLToPath } from "url";

// Recreate __dirname and __filename manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const command = "ExpressModule [moduleName]";
export const desc = "Scaffolds an Express module";
export const builder = {
  componentName: {
    default: "todos",
    type: "string",
    describe: "Enter name of your module",
  },
  dir: {
    alias: "d",
    default: ".",
    type: "string",
    describe: "Enter the directory in which you want to scaffold",
  },
};
export const handler = async function ({
  moduleName,
  dir,
}: Arguments<{ moduleName: string; dir: string }>) {
  const moduleNameLowerCase = moduleName.toLowerCase();
  const capitalize = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  const routerName = `${moduleName}Routes`;
  const controllerName = `${capitalize}Controller`;
  const serviceName = `${capitalize}Services`;
  const repositoryName = `${capitalize}Repository`;
  const data = {
    moduleName: moduleNameLowerCase,
    routerName,
    controllerName,
    serviceName,
    repositoryName,
  };
  const router = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-module/router.sqrl"),
    data,
  );
  const controller = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-module/controller.sqrl"),
    data,
  );
  const services = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-module/services.sqrl"),
    data,
  );
  const repository = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-module/repository.sqrl"),
    data,
  );
  const schemas = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-module/schemas.sqrl"),
    data,
  );

  await createFile(`${moduleNameLowerCase}.routes.ts`, router, {
    dir: `${dir}/${moduleNameLowerCase}`,
  });
  await createFile(`${moduleNameLowerCase}.controller.ts`, controller, {
    dir: `${dir}/${moduleNameLowerCase}`,
  });
  await createFile(`${moduleNameLowerCase}.services.ts`, services, {
    dir: `${dir}/${moduleNameLowerCase}`,
  });
  await createFile(`${moduleNameLowerCase}.repository.ts`, repository, {
    dir: `${dir}/${moduleNameLowerCase}`,
  });
  await createFile(`${moduleNameLowerCase}.schemas.ts`, schemas, {
    dir: `${dir}/${moduleNameLowerCase}`,
  });
  console.log("Created Module called", moduleNameLowerCase);
};
