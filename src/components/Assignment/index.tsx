import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { useStore } from "../../store";

interface AssignmentProps {
  id: number;
  title: string;
  completed: boolean;
}

export function Assignment({ id, title, completed }: AssignmentProps) {
  const deleteAssignment = useStore((state) => state.deleteAssignment);
  const toggleComplete = useStore((state) => state.completeAssignment); // renamed for clarity

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => toggleComplete(id)}>
        <div>
          {completed ? <BsCheckCircleFill /> : <BsCircle />}
        </div>
      </button>

      <p className={completed ? styles.textCompleted : ""}>{title}</p>

      <button className={styles.deleteButton} onClick={() => deleteAssignment(id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
