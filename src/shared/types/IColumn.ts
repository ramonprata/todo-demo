import { ITask } from './ITask';

export interface IColumn {
  title: string;
  tasks: ITask[];
  boardName: string;
}
