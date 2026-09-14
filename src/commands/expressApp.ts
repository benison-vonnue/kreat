import type { Arguments } from "yargs";
import * as Sqrl from "squirrelly";
import path from "path";
import { createFile } from "../utils/write.js";
import { fileURLToPath } from "url";
// Recreate __dirname and __filename manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const command = "ExpressApp [appName] [description]";
export const desc = "Scaffolds an Express App";
export const builder = {
  appName: {
    default: "myApp",
    type: "string",
    describe: "Enter name of your App",
  },
  description: {
    default: "",
    type: "string",
    describe: "Enter description for your App",
  },
  prisma: {
    alias: "p",
    type: "boolean",
    describe: "Scaffolds a Express Prisma App",
  },
};
export const handler = async function ({
  appName,
  description,
  prisma,
}: Arguments<{ appName: string; description: string; prisma: boolean }>) {
  const appNameLowerCase = appName.toLowerCase();
  const data = {
    appName: appNameLowerCase,
    description,
  };
  const package_json = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-app/package.json.sqrl"),
    data,
  );
  const tsconfig_json = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-app/tsconfig.ts.sqrl"),
    data,
  );
  const app_ts = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-app/app.ts.sqrl"),
    data,
  );
  const server_ts = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-app/server.ts.sqrl"),
    data,
  );
  await createFile(`package.json`, package_json, {});
  await createFile(`tsconfig.json`, tsconfig_json, {});
  await createFile(`server.ts`, server_ts, {
    dir: "src",
  });
  await createFile(`app.ts`, app_ts, {
    dir: "src",
  });

  if (prisma) {
    const prisma_package_json = await Sqrl.renderFile(
      path.join(
        __dirname,
        "../../templates/express-app/prisma.package.json.sqrl",
      ),
      data,
    );

    const prisma_lib = await Sqrl.renderFile(
      path.join(__dirname, "../../templates/express-app/prisma.ts.sqrl"),
      data,
    );
    const env = await Sqrl.renderFile(
      path.join(__dirname, "../../templates/express-app/env.sqrl"),
      data,
    );

    await createFile(`package.json`, prisma_package_json, {});
    await createFile(`.env`, env, {});
    await createFile(`prisma.ts`, prisma_lib, {
      dir: "src/lib",
    });
  }
  console.log("Scaffold App called", appName);
};
