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
  middleware: {
    alias: "m",
    type: "boolean",
    describe: "Scaffolds the error middleware with App",
  },
};
export const handler = async function ({
  appName,
  description,
  prisma,
  middleware,
}: Arguments<{
  appName: string;
  description: string;
  prisma: boolean;
  middleware: boolean;
}>) {
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

  const swagger_ts = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-app/swagger.ts.sqrl"),
    data,
  );
  const gitignore = await Sqrl.renderFile(
    path.join(__dirname, "../../templates/express-app/gitignore.sqrl"),
    data,
  );
  await createFile(`package.json`, package_json, {
    dir: appName,
  });
  await createFile(`tsconfig.json`, tsconfig_json, {
    dir: appName,
  });
  await createFile(`server.ts`, server_ts, {
    dir: `${appName}/src`,
  });
  await createFile(`app.ts`, app_ts, {
    dir: `${appName}/src`,
  });
  await createFile(`swagger.ts`, swagger_ts, {
    dir: appName,
  });
  await createFile(`.gitignore`, gitignore, {
    dir: appName,
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

    const config = await Sqrl.renderFile(
      path.join(
        __dirname,
        "../../templates/express-app/prisma7.config.json.sqrl",
      ),
      data,
    );

    await createFile(`package.json`, prisma_package_json, {
      dir: appName,
    });
    await createFile(`.env`, env, {
      dir: appName,
    });
    await createFile(`prisma.ts`, prisma_lib, {
      dir: `${appName}/src/lib`,
    });
    await createFile(`prisma7.config.ts`, config, {
      dir: appName,
    });
  }

  if (middleware) {
    const util = await Sqrl.renderFile(
      path.join(__dirname, "../../templates/express-app/error.ts.sqrl"),
      data,
    );

    const middleware = await Sqrl.renderFile(
      path.join(
        __dirname,
        "../../templates/express-app/error.middleware.ts.sqrl",
      ),
      data,
    );

    await createFile(`error.ts`, util, {
      dir: `${appName}/src/utils`,
    });
    await createFile(`error.middleware.ts`, middleware, {
      dir: `${appName}/src/middlewares`,
    });
  }
  console.log("Scaffold App called", appName);
};
