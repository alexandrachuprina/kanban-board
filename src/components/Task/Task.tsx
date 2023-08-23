import React, { FC } from "react";

import styles from "./Task.module.scss";

interface TaskProps {
  id: number;
  title: string;
  color: "to do" | "in progress" | "review" | "done";
  deleteTask: (id: number) => void;
}

enum Color {
  purple = "to do",
  blue = "in progress",
  orange = "review",
  green = "done",
}

const colorMap = {
  [Color.purple]: styles.purple,
  [Color.blue]: styles.blue,
  [Color.orange]: styles.orange,
  [Color.green]: styles.green,
};

const Task: FC<TaskProps> = ({ id, title, color, deleteTask }) => {
  return (
    <div className={styles.task}>
      <div className={colorMap[color]}>
        <p>{title}</p>
        <div className={styles.options}>
          <p className={styles.delete} onClick={() => deleteTask(id)}>delete</p>
          <div className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Task;
