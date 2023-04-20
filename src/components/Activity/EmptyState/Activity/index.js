import Image from "next/image";
import React from "react";

const ActivityEmpty = (props) => {
  return (
    <div
      data-cy="empty-state-activity"
      className="flex items-center justify-center cursor-pointer"
      onClick={props?.action}
    >
      <Image
        src={`/assets/activity-empty-state.png`}
        alt="empty-state"
        width={760}
        height={400}
      />
    </div>
  );
};

export default ActivityEmpty;
