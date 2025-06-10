import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useStore } from "../../store";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function Header() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const addAssignment = useStore((state) => state.addAssignment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addAssignment(title.trim(), dueDate);
      setTitle("");
      setDueDate(undefined); // Reset due date after submission
      setShowCalendar(false); // Hide calendar after submission   
    }
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          type ="text" 
          placeholder="Add a new assignment"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setShowCalendar(true);
          }}
          onFocus={() => setShowCalendar(true)}
          onBlur={() => {
            // Delay hiding the calendar to allow click events to register
            setTimeout(() => {
              if (!title.trim()) setShowCalendar(false);
            }, 150);
          }}
          />
        <button type="submit" disabled={!title.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
        {showCalendar && (
          <div className={styles.datePickerWrapper}>
            <DayPicker
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
            />
          </div>
        )}
      </form>
    </header>
  );
}
