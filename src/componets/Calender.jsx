import { useState } from "react";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calender() {
  const [viewDate, setViewDate] = useState(dayjs());

  const startOfMonth   = viewDate.startOf("month");
  const startWeekday   = startOfMonth.day(); // 0 (Sun) – 6 (Sat)
  const daysInMonth    = viewDate.daysInMonth();

  
  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = startOfMonth.subtract(startWeekday, "day").add(i, "day");
    days.push(d);
  }

  const prevMonth = () => setViewDate(viewDate.subtract(1, "month"));
  const nextMonth = () => setViewDate(viewDate.add(1, "month"));


  const styles = {
    container: {
      maxWidth: "28rem",
      margin: "0 auto",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem"
    },
    navBtn: {
      padding: "0.5rem",
      border: "none",
      borderRadius: "50%",
      background: "transparent",
      cursor: "pointer"
    },
    monthTitle: {
      fontSize: "1.25rem",
      fontWeight: 600,
      userSelect: "none"
    },
    weekdays: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      textAlign: "center",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#6b7280" 
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
      marginTop: "0.5rem"
    },
    cell: {
      height: "2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      userSelect: "none"
    }
  };


  return (
    <div style={styles.container}>
   
      <div style={styles.header}>
        <button onClick={prevMonth} aria-label="Previous month" style={styles.navBtn}>
          <ChevronLeft size={20} />
        </button>

        <h2 style={styles.monthTitle}>{viewDate.format("MMMM YYYY")}</h2>

        <button onClick={nextMonth} aria-label="Next month" style={styles.navBtn}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div style={styles.weekdays}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

   
      <div style={styles.grid}>
        {days.map((d, idx) => {
          const isCurrentMonth = d.month() === viewDate.month();
          const isToday        = d.isSame(dayjs(), "day");

         
          let color = "#9ca3af"; 
          if (isCurrentMonth) color = "#111827"; 
          if (isToday)        color = "#ffffff";

          const background = isToday ? "#3b82f6"  : "transparent";

          return (
            <div
              key={idx}
              style={{
                ...styles.cell,
                color,
                background
              }}
            >
              {d.date()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
