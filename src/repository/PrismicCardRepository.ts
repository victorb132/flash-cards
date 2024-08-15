import axios from "axios";
import { CardData, ICardDataRepository } from "./ICardRepository";

export class PrismicCardRepository implements ICardDataRepository {
  fetchData(): Promise<CardData[] | []> {
    const response: Promise<CardData[]> = axios.get("https://flash-cards.cdn.prismic.io/api/v2/documents/search?ref=Zr0yFRIAACAAJRxv&access_token=MC5acjA5LUJJQUFDRUFKUzBw.77-9De-_vWXvv70iYe-_ve-_vSkc77-977-9MHTvv73vv70E77-977-977-9J--_vQ1477-9bO-_ve-_ve-_ve-_ve-_vQ").then((res) => {
      var cardData: CardData[] = [];

      const data = res.data.results.map((item: any) => item.data);

      data.map((item: any) => {
        item.cards.map((item: any) => {
          cardData.push({
            question: item.question[0].text,
            answer: item.answer[0].text,
            category: item.category[0].text,
          });
        });
      })

      return cardData;
    });

    return response;
  }
}