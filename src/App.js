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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ItineraryPlanner from './ItineraryPlanner';
import SuggestionPage from './SuggestionPage';

import PlannerBoard from "./components/PlannerBoard";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            
          </VStack>
        </Grid>
      </Box> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planner" element={<ItineraryPlanner />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
