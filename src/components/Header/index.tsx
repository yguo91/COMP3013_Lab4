import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useStore } from "../../store";

export function Header() {
  const [title, setTitle] = useState("");
  const addAssignment = useStore((state) => state.addAssignment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addAssignment(title.trim());
      setTitle("");
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
          onChange={(e) => setTitle(e.target.value)} 
          />
        <button type="submit" disabled={!title.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
