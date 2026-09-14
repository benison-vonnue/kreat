import { writeFile, mkdir } from "fs/promises";

export const createFile = async (
  fileName: string,
  fileContent: string,
  { dir }: { dir?: string },
) => {
  try {
    if (dir) {
      await mkdir(dir, { recursive: true });
    }
  } catch (err) {}
  const absoluteFileName = dir ? `${dir}/${fileName}` : `${fileName}`;
  await writeFile(absoluteFileName, fileContent);
};
