import type { RunContext } from "../types/runContext";

export function buildPrompt(context: RunContext): string {
  return [
    "You are a precise and analytical reviewer. Focus on identifying key insights, risks, and structural weaknesses. Be concise and structured.",
    "",
    `Task: ${context.request.input}`,
    "",
    "Context:",
    `role: ${context.role.active_role}`,
    `task_type: ${context.request.task_type}`,
    `allowed_skills: ${context.skills.allowed_skills.join(", ") || "none"}`,
    `memory_read: ${context.memory.read_allowed}`,
    `memory_write: ${context.memory.write_allowed}`,
    `budget_remaining_tokens: ${context.budget.remaining_tokens ?? "unknown"}`,
  ].join("\n");
}
