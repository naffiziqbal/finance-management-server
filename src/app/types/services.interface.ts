export interface IService {
    name: string;
    creatorId: string;
    category: string;
    description: string;
    type: "income" | "expenses";
    amount: number;
}

