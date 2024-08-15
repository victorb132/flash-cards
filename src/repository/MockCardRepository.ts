import { CardData, ICardDataRepository } from "./ICardRepository";

export class MockCardRepository implements ICardDataRepository {
  async fetchData(): Promise<CardData[]> {
    return [
      {
        question: "Who Invented The Mouse?",
        answer: "Douglas Engelbart",
        category: "Technology",
      },
      {
        question: "What is the longest river in the world?",
        answer: "The Nile River",
        category: "Geography",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        category: "Literature",
      },
      {
        question: "What is the largest planet in our Solar System?",
        answer: "Jupiter",
        category: "Astronomy",
      },
      {
        question: "What is the speed of light?",
        answer: "299,792 km/s",
        category: "Physics",
      },
    ];
  }
}