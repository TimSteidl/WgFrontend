import React, { useState } from "react";
import { DayPicker, DayContent } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Sample events data
const events = {
  "2023-06-15": [{ title: "Meeting" }, { title: "Lunch" }],
  "2023-06-20": [{ title: "Conference" }],
  "2023-06-25": [{ title: "Birthday" }, { title: "Dinner" }],
};

function CustomDay(props: { date: Date; selected: boolean }) {
  const { date, selected } = props;
  const formattedDate = format(date, "yyyy-MM-dd");
  const dayEvents = events[formattedDate] || [];

  return (
    <div
      className={cn(
        "w-32 h-32 p-2 border border-gray-200",
        selected && "bg-primary text-primary-foreground",
      )}
    >
      <div className="font-semibold mb-1">{format(date, "d")}</div>
      <ul className="text-xs space-y-1">
        {dayEvents.map(
          (
            event: {
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    never,
                    string | React.JSXElementConstructor<never>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            },
            index: React.Key | null | undefined,
          ) => (
            <li key={index} className="truncate">
              {event.title}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export function EnhancedCalendar() {
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);

  const handleDayClick = (day: Date) => {
    setSelectedDays((prevSelectedDays) => {
      if (
        prevSelectedDays.some(
          (selectedDay) =>
            selectedDay.getDate() === day.getDate() &&
            selectedDay.getMonth() === day.getMonth() &&
            selectedDay.getFullYear() === day.getFullYear(),
        )
      ) {
        return prevSelectedDays.filter(
          (selectedDay) =>
            selectedDay.getDate() !== day.getDate() ||
            selectedDay.getMonth() !== day.getMonth() ||
            selectedDay.getFullYear() !== day.getFullYear(),
        );
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <DayPicker
        mode="multiple"
        selected={selectedDays}
        onDayClick={handleDayClick}
        className="border rounded-lg shadow-lg p-4"
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-32 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: "h-32 w-32 p-0 font-normal aria-selected:opacity-100",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
        }}
        components={{
          DayContent: ({ date, ...props }) => (
            <CustomDay
              date={date}
              selected={selectedDays.some(
                (selectedDay) =>
                  selectedDay.getDate() === date.getDate() &&
                  selectedDay.getMonth() === date.getMonth() &&
                  selectedDay.getFullYear() === date.getFullYear(),
              )}
            />
          ),
        }}
      />
      <div className="text-center">
        <h3 className="font-semibold mb-2">Selected Dates:</h3>
        <ul>
          {selectedDays.map((day, index) => (
            <li key={index}>{format(day, "MMMM d, yyyy")}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
