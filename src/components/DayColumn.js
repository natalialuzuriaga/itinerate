import update from 'immutability-helper'
import React, { useCallback, useState } from 'react'
import { Flex, Text } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

import { ItemTypes } from './ItemTypes.js';
import ActivityCard from "./ActivityCard";

export default function DayColumn({ title, items }) {
  // const { setNodeRef } = useDroppable({
  //   id: title,
  // });

  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.CARD
  }))

  const [cards, setCards] = useState(items);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <ActivityCard
        key={card.key}
        index={index}
        id={card.key}
        title={card.title}
        moveCard={moveCard}
      />
    )
  }, [])

  return (
    <Flex ref={drop} flex="3" padding="5" flexDirection="column" minH="10rem">
      <Text fontWeight="bold">{title}</Text>
      <Flex
        backgroundColor="gray.200"
        borderRadius="8"
        flex="1"
        padding="2"
        flexDirection="column"
      >
        {cards.map((card, i) => renderCard(card, i))}
      </Flex>
    </Flex>
  );
}