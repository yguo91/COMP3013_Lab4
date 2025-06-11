import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { useStore } from "../../store";
import { formatDistanceToNow, isTomorrow, isPast, isToday } from 'date-fns';

interface AssignmentProps {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: Date;
}

export function Assignment({id, title, completed, dueDate}: AssignmentProps) {
  const deleteAssignment = useStore((state) => state.deleteAssignment);
  const toggleComplete = useStore((state) => state.completeAssignment); // renamed for clarity

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => toggleComplete(id)}>
        <div>
          {completed ? <BsCheckCircleFill /> : <BsCircle />}
        </div>
      </button>

      <p className={completed ? styles.textCompleted : ""}>{title} </p>
      {/* Display due date if it exists */}
      {dueDate && (
        <p>
          Due:{" "}
          <span
            className={
              isPast(new Date(dueDate)) && !isToday(new Date(dueDate))
                ? styles.dueOverdue
                : isTomorrow(new Date(dueDate))
                ? styles.dueTomorrow
                : styles.dueLater
            }
          >
            {isPast(new Date(dueDate)) && !isToday(new Date(dueDate))
              ? "overdue"
              : isTomorrow(new Date(dueDate))
              ? "tomorrow"
              : formatDistanceToNow(new Date(dueDate), { addSuffix: false })}
          </span>
        </p>
      )}  

      <button className={styles.deleteButton} onClick={() => deleteAssignment(id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
