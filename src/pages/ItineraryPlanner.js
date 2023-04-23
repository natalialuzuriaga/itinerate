import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

import PlannerBoard from '../components/PlannerBoard';
import Axios from "axios";

const ItineraryPlanner = () => {

  const loc = useLocation();
  const interested = loc.state.interested;
  const location = loc.state.location;  

  const loading = useState(true);

  //getEvents
  useEffect(() => {
    if(loading) {
    
    // let interestedJson = JSON.stringify({interested})
    console.log(interested, "testing");
    console.log(`http://localhost:3001/getEvents?city=${location}&interested=${interested}`)
    const config = {
      method: "get",
      url: `http://localhost:3001/getEvents?city=${location}&interested=${interested}`,
      headers: {
        "Content-Type": "application/json"
      }
    }
    Axios(config)
    .then(res => {
      console.log('RES DATA' + res.data)
    }, [loading])}});


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <PlannerBoard/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default ItineraryPlanner;
