
 

import { DndContext, rectIntersection } from "@dnd-kit/core";
// import AddCard from "./AddCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import DayColumn from "./DayColumn";

export default function PlannerBoard() {

const [mondayItems, setMondayItems] = useState([]);
const [tuesdayItems, setTuesdayItems] = useState([]);
const [inProgressItems, setInProgressItems] = useState([{ title: "Hollywood Hike", key: 1}, { title: "Santa Monica Pier", key: 2}, { title: "K-Town", key: 3}, { title: "Griffith Observatory", key: 4}]);
const [uItems, setuItems] = useState([]);

//   const addNewCard = (title: string) => {
//     setuItems([...uItems, { title }]);
//   };

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        console.log(e);
        console.log(e.active.data.current?.title, "title");
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "Monday";
        if (container === "Monday") {
          console.log("monday");
          setMondayItems([...mondayItems, { title, index, parent}]);
        } else if (container === "Tuesday") {
            console.log("tuesday");
          setTuesdayItems([...tuesdayItems, { title, index, parent}]);
        } else if (container === "Unassigned") {
          setuItems([...uItems, { title, index, parent}]);
        } else {
          console.log("in progress");
          setInProgressItems([...inProgressItems, { title, index, parent}]);
        }
        if (parent === "Monday") {
          setMondayItems([
            ...mondayItems.slice(0, index),
            ...mondayItems.slice(index + 1),
          ]);
        } else if (parent === "Tuesday") {
          setTuesdayItems([
            ...tuesdayItems.slice(0, index),
            ...tuesdayItems.slice(index + 1),
          ]);
        } else if (parent === "Unassigned") {
          setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
        }
      }}
    >
      <Flex flexDirection="column">
        {/* <AddCard addCard={addNewCard} /> */}
        <Flex flex="3">
            <DayColumn title="In Progress" items={inProgressItems}/>
            <DayColumn title="Monday" items={mondayItems}/>
            <DayColumn title="Tuesday" items={tuesdayItems}/>
            {/* <DayColumn title="Unassigned" items={uItems}/> */}
        </Flex>
      </Flex>
    </DndContext>
  );
}