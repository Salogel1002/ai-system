export type RunContext = {
  run_id: string;
  request: {
    input: string;
    task_type: string;
  };
  session: {
    session_id: string;
    user_id: string | null;
  };
  tenant: {
    tenant_id: string | null;
  };
  role: {
    active_role: string;
  };
  prompts: {
    system_prompt_id: string;
    task_prompt_id: string;
    evaluator_prompt_id: string;
  };
  skills: {
    allowed_skills: string[];
  };
  memory: {
    read_allowed: boolean;
    write_allowed: boolean;
    categories: string[];
  };
  budget: {
    token_budget: number | null;
    cost_budget: number | null;
    time_budget: number | null;
    remaining_tokens: number | null;
  };
  execution: {
    run_type: string;
    max_rebuilds: number;
    current_rebuild_count: number;
  };
  state: {
    current_state: string;
  };
  evaluation: {
    status: string | null;
  };
  trace: {
    trace_id: string;
  };
};
