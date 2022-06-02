import React from "react";
interface EventInDayViewProps {
  top: number;
  height: number;
  description: string;
}

export const EventInDayView = ({ top, height, description }: EventInDayViewProps) => {
  return (
    <div style={{ top, height }} className="event-in-day-view">
      {description}
    </div>
  );
};
