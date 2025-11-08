import { useEffect, useState } from "react";

export default function Corousal() {
  const corousalData = ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg"];

  return (
    <div className="flex flex-col">
      <div className="aspect-video rounded-xl relative shadow-sm overflow-hidden"></div>
    </div>
  );
}
