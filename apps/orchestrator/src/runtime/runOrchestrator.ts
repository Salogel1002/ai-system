import { evaluateResult } from "../evaluation/evaluateResult";
import { buildPrompt } from "../prompts/buildPrompt";
import { writeTrace } from "../tracing/writeTrace";
import type { ResponseObject } from "../types/responseObject";
import { buildRunContext } from "./buildRunContext";

type RunOrchestratorInput = {
  input: string;
  session_id?: string;
  user_id?: string | null;
  tenant_id?: string | null;
};

function executeModel(prompt: string): string {
  // MVP-Mock: später durch echten Modellaufruf ersetzen
  return `Mock response for prompt:\n${prompt}`;
}

export function runOrchestrator({
  input,
  session_id,
  user_id,
  tenant_id,
}: RunOrchestratorInput): ResponseObject {
  const context = buildRunContext({
    input,
    session_id,
    user_id,
    tenant_id,
  });

  const prompt = buildPrompt(context);
  const output = executeModel(prompt);
  const decision = evaluateResult(output);
  const trace_id = writeTrace(context, decision);

  return {
    run_id: context.run_id,
    result: {
      output,
    },
    decision: {
      status: decision,
    },
    trace: {
      trace_id,
    },
  };
}
