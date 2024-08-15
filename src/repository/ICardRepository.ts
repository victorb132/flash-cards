export interface CardData {
  question: string;
  answer: string;
  category: string;
}

export interface ICardDataRepository {
  fetchData(): Promise<CardData[] | []>;
}