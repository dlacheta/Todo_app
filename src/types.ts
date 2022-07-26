export type TodosType = {
  id: string;
  todo: string;
  completed: boolean;
};

export enum FilterEnum {
  all,
  active,
  completed,
}
