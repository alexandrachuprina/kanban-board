export type TColumn = "to do" | "in progress" | 'review' | "done";

export interface IColumn {
  id: number;
  name: TColumn;
}

export const defaultColumns: IColumn[] = [
  {
    id: 0,
    name: "to do",
  },
  {
    id: 1,
    name: "in progress",
  },
  {
    id: 2,
    name: "review",
  },
  {
    id: 3,
    name: "done",
  },
];

export interface ITask {
  id: number;

  column: TColumn;
  title: string;
}

export const defaultTask: ITask = {
  id: 0,
  column: "to do",
  title: " ",
};
