import React from "react";
interface EventInDayViewProps {
    top: number
    height: number
}

export const EventInDayView  = ({top, height}: EventInDayViewProps) => {
    return <div
    style = {{top, height}}
    className="event-in-day-view">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto quam dolor accusantium, laborum itaque, iure ad dignissimos velit aut quos est magnam laudantium nesciunt beatae assumenda, fugit dolorum voluptate?
            </div>
}