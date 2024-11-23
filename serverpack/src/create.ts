import path from "path";
import * as log from "./log";
import { checkAndPrepare, downloadFile, getPackInfo, loadMods } from "./utils";
import { getDownloadUrl, getModInfo } from "./curseforge";
import type { Mod } from "./types";
import { copyPackwizFiles } from "./packwiz";
import { downloadForge } from "./forge";
import { exec } from "child_process";

global.BASE_DIR = path.resolve("..");
global.OUT_DIR = path.resolve("pack");

await checkAndPrepare();

let i = 0;
const mods = loadMods();
let nonDistributableMods: Mod[] = [];
for await (const mod of mods) {
    i++;
    if (mod.side === "client") {
        continue;
    }

    log.info(`Fetching ${mod.name}'s info... (${i}/${mods.length})`);
    const info = await getModInfo(mod);
    if (!info.allowModDistribution) {
        log.warn(`${mod.name} doesn't allow distribution, you will have to download it manually.`);
        nonDistributableMods.push(mod);
        continue;
    }

    log.info(`Fetching ${mod.name}'s download url... `);
    const downloadUrl = await getDownloadUrl(mod);

    log.info(`Downloading ${mod.name}...`);
    await downloadFile(downloadUrl, path.join(OUT_DIR, "mods", mod.filename));
    log.success(`Downloaded ${mod.name}.`);

    console.log("\n");
}

await copyPackwizFiles();

const pack = getPackInfo();
const forgeVersion = pack.versions["forge"];
const minecraftVersion = pack.versions["minecraft"];

const forgeFilename = `forge-${minecraftVersion}-${forgeVersion}-installer.jar`;

await downloadForge(`${minecraftVersion}-${forgeVersion}`, path.join(global.OUT_DIR, forgeFilename));
const installerProcess = exec(
    `java -jar ${forgeFilename} --installServer`,
    {
        cwd: global.OUT_DIR,
    },
    (err) => {
        if (err) {
            log.error("There was an error during installing Forge, please check the logs.");
            process.exit(-1);
        }
        log.success("Installing Forge done!");

        if (nonDistributableMods.length !== 0) {
            log.warn(
                "Some mods could not be downloaded due to distribution restrictions set by their authors. Please download these mods manually:",
            );
            nonDistributableMods.forEach((mod) => console.log(`- ${mod.name}, ${mod.filename}`));
        }
    },
);
installerProcess.stdout?.pipe(process.stdout);
installerProcess.stderr?.pipe(process.stderr);
