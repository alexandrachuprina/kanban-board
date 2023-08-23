import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import TaskCreator from "../../components/TaskCreator/TaskCreator";
import TasksList from "../../components/TasksList/TasksList";
import { ITask, defaultTask } from "../../types/types";

const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([defaultTask]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks") as string;
    if (tasks) {
      const data = JSON.parse(tasks) as ITask[]
      setTasks(data);
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <TaskCreator tasks={tasks} setTasks={setTasks} />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Home;
