import { downloadFile } from "./utils";

export async function downloadNeoforge(version: string, outputPath: string) {
    const url = `https://maven.neoforged.net/releases/net/neoforged/neoforge/${version}/neoforge-${version}-installer.jar`;

    await downloadFile(url, outputPath);
}