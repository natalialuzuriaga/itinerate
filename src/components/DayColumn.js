import { Flex, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import ActivityCard from "./ActivityCard";

export default function DayColumn({ title, items }) {
  const { setNodeRef } = useDroppable({
    id: "hi",
  });
  return (
    <Flex flex="3" padding="5" flexDirection="column" minH="10rem">
      <Text fontWeight="bold">{title}</Text>
      <Flex
        ref={setNodeRef}
        backgroundColor="gray.200"
        borderRadius="8"
        flex="1"
        padding="2"
        flexDirection="column"
      >
        {items.map(({ title: cardTitle }, key) => (
          <ActivityCard title={"hihihihi"} key={key} index={key} parent={title} />
        ))}
      </Flex>
    </Flex>
  );
}