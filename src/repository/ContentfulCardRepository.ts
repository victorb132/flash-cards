import axios from "axios";
import { CardData, ICardDataRepository } from "./ICardRepository";

export class ContentfulCardRepository implements ICardDataRepository {
  fetchData(): Promise<CardData[] | []> {
    var cardData: CardData[] = [];

    const url = `https://graphql.contentful.com/content/v1/spaces/00ohoyltnm65/`;

    const response = axios.get(url, {
      headers: {
        Authorization: 'Bearer G-kvbw4K-qWK6eTYCtjcnNbHVH4jI41jgD8YxBi5LHk'
      }
    }).then((res) => {
      console.log(res);
      const data = res.data.data.cardsCollection.items;

      data.map((item: any) => {
        cardData.push({
          question: item.question,
          answer: item.answer,
          category: item.category,
        });
      });

      return cardData;
    })

    return response;
  }
}
