
import { useEffect, useState } from "react";
import "./VisionWatch.css";

export default function VisionWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="vs-mini-watch">
      <span className="vs-mini-eye">👁️</span>
      <div className="vs-mini-info">
        <span className="vs-mini-brand">VISION SQUAD</span>
        <span className="vs-mini-time">
          {time.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </span>
      </div>
    </div>
  );
}
