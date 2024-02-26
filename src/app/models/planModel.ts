export interface IPlan {
  list: IPlanList[];
}

export interface IPlanList {
  name: string;
  price: number;
  description: string[];
  age: number;
}

