import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import DayColumn from "./components/DayColumn";
import ActivityCard from "./components/ActivityCard";

const items = [{ title: "hi", key: 1}, { title: "test", key: 2}, { title: "byte", key: 3}, { title: "ok", key: 4}]
function ItineraryPlanner() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <DayColumn title="Monday" items={items}/>
            <DayColumn title="Tuesday" items={items}/>
            <DayColumn title="Wednesday" items={items}/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default ItineraryPlanner;
