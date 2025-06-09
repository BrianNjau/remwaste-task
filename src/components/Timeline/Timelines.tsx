import { Timeline } from "antd";
import { TimelineItems } from "./TimelineItems";

const Timelines = () => {
  // ux improvement: add include timeline for each step

  return (
    <Timeline
      style={{
        marginTop: "20px",
      }}
      items={TimelineItems}
    />
  );
};

export default Timelines;
