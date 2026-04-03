import { runOrchestrator } from "./runtime/runOrchestrator";

const response = runOrchestrator({
  input: "Summarize this proposal and identify the main risks.",
});

console.log(JSON.stringify(response, null, 2));
