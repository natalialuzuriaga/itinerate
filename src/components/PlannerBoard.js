
 

// import { DndContext, rectIntersection } from "@dnd-kit/core";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import AddCard from "./AddCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import DayColumn from "./DayColumn";

const PlannerBoard = (props) => {

// const [mondayItems, setMondayItems] = useState([{ title: "H", key: 1}, { title: "S", key: 2}, { title: "K", key: 3}, { title: "Gr", key: 4}]);
const [mondayItems, setMondayItems] = useState([]);
const [tuesdayItems, setTuesdayItems] = useState([]);
const [inProgressItems, setInProgressItems] = useState(props.data);
const [uItems, setuItems] = useState([]);

  return (
    // <DndProvider backend={HTML5Backend}
    //   collisionDetection={rectIntersection}
    //   onDragEnd={(e) => {
    //     console.log(e);
    //     console.log(e.active.data.current?.title, "title");
    //     const container = e.over?.id;
    //     const title = e.active.data.current?.title ?? "";
    //     const index = e.active.data.current?.index ?? 0;
    //     const parent = e.active.data.current?.parent ?? "Monday";
    //     if (container === "Monday") {
    //       setMondayItems([...mondayItems, { title, index, parent: container}]);
    //     } else if (container === "Tuesday") {
    //         console.log("tuesday");
    //       setTuesdayItems([...tuesdayItems, { title, index, parent: container}]);
    //     } else if (container === "Unassigned") {
    //       setuItems([...uItems, { title, index, parent: container}]);
    //     } else {
    //       console.log("in progress");
    //       setInProgressItems([...inProgressItems, { title, index, parent: container}]);
    //     }
    //     if (parent === "Monday") {
    //       setMondayItems([
    //         ...mondayItems.slice(0, index),
    //         ...mondayItems.slice(index + 1),
    //       ]);
    //     } else if (parent === "Tuesday") {
    //       setTuesdayItems([
    //         ...tuesdayItems.slice(0, index),
    //         ...tuesdayItems.slice(index + 1),
    //       ]);
    //     } else if (parent === "Unassigned") {
    //       setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
    //     } else {
    //       setInProgressItems([
    //         ...inProgressItems.slice(0, index),
    //         ...inProgressItems.slice(index + 1),
    //       ]);
    //     }
    //     // if(parent === container) {
    //     //   console.log("do nothing lol")
    //     // }
    //   }}
    // >
    <DndProvider backend={HTML5Backend}>
      <Flex flexDirection="column">
        <Flex flex="3">
            <DayColumn title="In Progress" items={inProgressItems}/>
            <DayColumn title="Monday" items={mondayItems}/>
            <DayColumn title="Tuesday" items={tuesdayItems}/>
            <DayColumn title="Unassigned" items={uItems}/>
            <DayColumn title="Unassigned" items={uItems}/>
            <DayColumn title="Unassigned" items={uItems}/>
        </Flex>
      </Flex>
      </DndProvider>
  );
}

export default PlannerBoard;
