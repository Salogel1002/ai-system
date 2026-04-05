import { runOrchestrator } from "./runtime/runOrchestrator.js";

const response = await runOrchestrator({
  input: "Summarize this proposal and identify the main risks.",
});

console.log(JSON.stringify(response, null, 2));
