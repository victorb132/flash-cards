import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { SCREEN_WIDTH } from "../constants/window";
import Controls from "./controls";
import FlashCardItem from "./flashCardItem";
import Header from "./header";
import { CardData, ICardDataRepository } from "../repository/ICardRepository";
import { MockCardRepository } from "../repository/MockCardRepository";
import { PrismicCardRepository } from "../repository/PrismicCardRepository";
import { ContentfulCardRepository } from "../repository/ContentfulCardRepository";

export const FlashCard = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  const repository: ICardDataRepository = new PrismicCardRepository();

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const cards = await repository.fetchData();
    setCardsData(cards);
  };

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex - 1) * SCREEN_WIDTH,
        animated: true,
      });
    }
  };

  const onNext = () => {
    if (currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * SCREEN_WIDTH,
        animated: true,
      });
    }
  };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#6b67da", "#dbb1f0"]}>
      <Header />
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
      >
        {cardsData.map((data, index) => (
          <FlashCardItem key={index} {...{ data }} />
        ))}
      </ScrollView>
      <Controls onPrev={onPrev} onNext={onNext} />
    </LinearGradient>
  );
};

export { CardData };
