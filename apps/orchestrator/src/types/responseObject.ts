export type ResponseObject = {
  run_id: string;
  result: {
    output: string;
  };
  decision: {
    status: "ACCEPT" | "FAIL" | "REJECT" | "REBUILD_REQUIRED" | "ABORT";
  };
  trace: {
    trace_id: string;
  };
};
