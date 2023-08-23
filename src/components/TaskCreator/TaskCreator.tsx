import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./TaskCreator.module.scss";
import { ITask, defaultTask } from "../../types/types";

interface CreatorProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskCreator: FC<CreatorProps> = ({ tasks, setTasks }) => {
  const [task, setTask] = useState<ITask>(defaultTask);

  const createTask = () => {
    const input = document.getElementById("input") as HTMLInputElement;

    if (input.value === "") {
      alert("so");
    } else {
      setTasks([...tasks, task]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
      input.value = "";
    }
  };

  return (
    <div className={styles.creator}>
      <div className={styles.input_wrap}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type something"
          id="input"
          contentEditable="true"
          onChange={(e) => {
            setTask({
              id: tasks.length + 1,
              title: e.target.value,
              column: "to do",
            });
          }}
        />
      </div>
      <button className={styles.button} onClick={createTask}>
        <p>Create</p>
      </button>
    </div>
  );
};

export default TaskCreator;
