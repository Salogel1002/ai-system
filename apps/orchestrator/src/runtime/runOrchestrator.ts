import { evaluateResult } from "../evaluation/evaluateResult";
import { buildPrompt } from "../prompts/buildPrompt";
import { writeTrace } from "../tracing/writeTrace";
import type { ResponseObject } from "../types/responseObject";
import { buildRunContext } from "./buildRunContext";
import { executeModel } from "./executeModel";

type RunOrchestratorInput = {
  input: string;
  session_id?: string;
  user_id?: string | null;
  tenant_id?: string | null;
};

export async function runOrchestrator({
  input,
  session_id,
  user_id,
  tenant_id,
}: RunOrchestratorInput): Promise<ResponseObject> {
  const context = buildRunContext({
    input,
    session_id,
    user_id,
    tenant_id,
  });

  const prompt = buildPrompt(context);
  const output = await executeModel(prompt);
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
