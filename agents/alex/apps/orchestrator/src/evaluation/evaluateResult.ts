export function evaluateResult(output: string): "ACCEPT" | "FAIL" {
  const normalized = output.trim();

  if (!normalized) {
    return "FAIL";
  }

  return "ACCEPT";
}
