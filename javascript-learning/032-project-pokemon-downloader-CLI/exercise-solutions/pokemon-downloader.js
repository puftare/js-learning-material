import { promptUser } from "./prompts.js";

console.log("=== POKEMON DOWNLOADER ===");

const poke = await promptUser();
console.log(poke);
