import React, { FC, useState, useEffect, ReactNode, useRef } from "react";
import { IColumn, ITask, TColumn, defaultColumns } from "../../types/types";
import Task from "../Task/Task";
import styles from "./TasksList.module.scss";

interface ListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TasksList: FC<ListProps> = ({ tasks, setTasks }) => {
  const columns: IColumn[] = defaultColumns;
  const draggableTask = useRef<number>(0);

  const columnDropHandler = (
    e: React.DragEvent<HTMLDivElement>,
    column: IColumn
  ) => {
    e.preventDefault();
    const index = tasks.findIndex((task) => task.id === draggableTask.current);
    const tempTasks = [...tasks];
    tempTasks[index].column = column.name;
    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  };

  const deleteTask = (id: number) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (taskToDelete) {
      const index = tasks.indexOf(taskToDelete);
      const tempTasks = [...tasks];
      tempTasks.splice(index, 1);
      setTasks(tempTasks);
      localStorage.setItem("tasks", JSON.stringify(tempTasks));
    }
  };

  return (
    <div className={styles.columns}>
      {columns.map((column) => (
        <div
          className={styles.column}
          key={column.id}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => columnDropHandler(e, column)}
        >
          <div className={styles.title}>
            <h1>{column.name}</h1>
          </div>
          <div className={styles.content}>
            {tasks
              .filter((task) => task.column === column.name)
              .map((task) => (
                <div
                  className={styles.task}
                  key={task.id}
                  onDragStart={() => (draggableTask.current = task.id)}
                  onDragOver={(e) => e.preventDefault()}
                  draggable="true"
                >
                  <Task
                    id={task.id}
                    title={task.title}
                    color={column.name}
                    deleteTask={deleteTask}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
