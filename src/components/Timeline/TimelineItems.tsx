// these would depend on actual processes and completion times in the real application
export const TimelineItems = [
  //in real app - this would be dynamic process state  + completion date that is dynamic
  {
    children: (
      <>
        Submit {/*process */}
        <br />
        2025-01-01 {/*date */}
      </>
    ),
  },
  {
    children: (
      <>
        Completed
        <br />
        2025-01-01
      </>
    ),
    color: "green", // color can be dynamic based on process state - static for demo
  },
];
