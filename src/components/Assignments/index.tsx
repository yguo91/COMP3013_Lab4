import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useStore } from "../../store";

export function Assignments() {
  const assignments = useStore((state) => state.assignments);
  const completed = assignments.filter((a) => a.completed).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((a) => (
          <Assignment key={a.id} id={a.id} title={a.title} completed={a.completed} />
        ))}
      </div>
    </section>
  );
}
