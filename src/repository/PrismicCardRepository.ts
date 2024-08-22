import axios from "axios";
import { CardData, ICardDataRepository } from "./ICardRepository";

export class PrismicCardRepository implements ICardDataRepository {
  async fetchData(): Promise<CardData[] | []> {
    const prismicUrl = process.env.EXPO_PUBLIC_PRISMIC_BASE_URL;
    const prismicReference = process.env.EXPO_PUBLIC_PRISMIC_REFERENCE;
    const prismicToken = process.env.EXPO_PUBLIC_PRISMIC_TOKEN;

    const url = `${prismicUrl}/documents/search?ref=${prismicReference}&q=%5B%5Bat(document.type%2C%22card%22)%5D%5D&access_token=${prismicToken}`;

    const response: CardData[] = await axios.get(url).then((res) => {
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