import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {
  ChakraProvider,
  Center,
  Box,
  Text,
  Button,
  Image,
  Heading,
  Select,
  Grid,
  SimpleGrid,
  Spacer,
  HStack,
  GridItem,
  theme,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox, CheckboxGroup, MenuItem

} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';
import TravelAttraction from '../components/TravelAttraction';
import Axios from "axios";

// class SuggestionPage extends React.Component {

//     constructor(props) {
//         super(props)
//         const loc = useLocation();
//         console.log("logging location")
//         this.state = {
//             location: loc.state.location,
//             duration: loc.state.duration,
//         }
//     }

//     render() {
// return (
//     <ChakraProvider theme={theme}>
//         <Grid
//             h='auto'
//             templateRows='repeat(5, 1fr)'
//             templateColumns='repeat(4, 1fr)'
//             gap={4}
//             padding={8}
//             minChildWidth='120px' spacing='40px'
//             >
//             {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
//             <GridItem alignItems="center" rowSpan={1} colSpan={4} bg='green.200' fontSize={35} height='auto' textAlign='center'>
//                 <Heading>{this.state.location}</Heading>
//                 <div>{this.state.duration} Days</div>
//             </GridItem>
//             {/* <GridItem colSpan={2} bg='papayawhip' /> */}
//             <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
//                 <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
//                     <Center><text p={40} fontSize={50}>Attractions</text></Center>
//                 </Box>
//                 <TravelAttraction
//                     // name={suggestions['Landmark'][0]['_id']}
//                     // description={suggestions['Landmark'][0]['description']}
//                     // location={suggestions['Landmark'][0]['location']}
//                     name="asdf"
//                     description="asdf"
//                     location="asdf"
//                 />
//                 <TravelAttraction
//                     name="Great Wall of China"
//                     description="The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials."
//                     location="China"
//                     />
//                 <TravelAttraction
//                 name="Machu Picchu"
//                 description="Machu Picchu is a 15th-century citadel situated on a ridge 2,430 metres (7,970 ft) above sea level."
//                 location="Peru"
//                 />
//             </GridItem>
//             <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
//             <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
//                     <Center><text p={40} fontSize={50}>Outdoors</text></Center>
//             </Box>
//             <TravelAttraction
//             name="Yosemite National Park"
//             description="Yosemite National Park is located in the western Sierra Nevada and is renowned for its granite cliffs."
//             location="California, United States"
//             />

//             <TravelAttraction
//             name="The Great Barrier Reef"
//             description="The Great Barrier Reef is the largest reef system, located in the Coral Sea off the coast of Australia."
//             location="Queensland, Australia"
//             />

//             <TravelAttraction
//             name="Banff National Park"
//             description="Banff National Park is located in the Canadian Rockies and is known for its turquoise lakes."
//             location="Alberta, Canada"
//             />
//             </GridItem>
//             <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
//             <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
//                     <Center><text p={40} fontSize={50}>Leisure</text></Center>
//                 </Box>
//             </GridItem>
//             <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
//             <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
//                     <Center><text p={40} fontSize={50}>Nightlife</text></Center>
//                 </Box>
//             </GridItem>
//         </Grid>

//     </ChakraProvider>
 
//    )}

// }

const SuggestionPage = (props) => {
    const [value, setValue] = React.useState(50); // set initial value
    const [foodSuggestions, setFoodSuggestions] = useState([]);
    const [outdoorSuggestions, setOutdoorSuggestions] = useState([]);
    const [landmarkSuggestions, setLandmarkSuggestions] = useState([]);
    const [shoppingSuggestions, setShoppingSuggestions] = useState([]);
    const [nightlifeSuggestions, setNightlifeSuggestions] = useState([]);

    const [loading, setLoading] = useState(true);

    const [interested, setInterested] = useState([]);

    const handleChange = (newValue) => {
        setValue(newValue);
      };
      const loc = useLocation();
      const location = loc.state.location;
      const duration = loc.state.duration;  
      console.log("logging location")
      console.log(location)

    const navigate = useNavigate();
    const toPlanner=()=>{
      console.log('interested: ' + interested)
      navigate('/planner',{state:{interested: interested}});
        }
    const pull_data = (name, selected) => {
      console.log(name + ' ' + selected); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      let temp = [...interested, name];
      setInterested(temp);
      console.log(interested)
    }

      useEffect(() => {
        if(loading) {
        const config = {
          method: "get",
          url: `http://localhost:3001/getSuggestions?city=${loc.state.location}`,
          headers: {
            "Content-Type": "application/json"
          }
        }
        Axios(config)
        .then(res => {
        // console.log('RES DATA' + res.data['Landmark'][0]['_id'])
        setFoodSuggestions(res.data['Food'])
        setOutdoorSuggestions(res.data['Outdoor'])
        setLandmarkSuggestions(res.data['Landmark'])
        setShoppingSuggestions(res.data['Shopping'])
        setNightlifeSuggestions(res.data['Nightlife'])
        setLoading(false);
        }, [loading])}});

      console.log("logging suggestions")
      // console.log(suggestions);
      // console.log(suggestions['Landmark'][0]['_id']);

      return (
    <ChakraProvider theme={theme}>
        <Grid
            h='auto'
            templateRows='repeat(10, 1fr)'
            templateColumns='repeat(5, 1fr)'
            // gap={4}
            padding={8}
            minChildWidth='120px' //spacing='20px'
            >
            <GridItem alignItems="center" rowSpan={1} colSpan={5} bg='green.200' borderRadius="8px"
            fontSize={35} height='90px' textAlign='center'>
                <Heading>{location}</Heading>
                <div>{duration} Days</div>
            </GridItem>
            <GridItem rowSpan={12} colSpan={1} borderRadius='10px' bg='blue.100'>
                <Box margin={15} borderRadius='18px' bg="gray.400">
                    <Center><text p={40} fontSize={50}>Attractions</text></Center>
                </Box>

                {landmarkSuggestions.length ? (landmarkSuggestions.map((item) => (
                  <TravelAttraction
                    name={item._id}
                    description={item.description}
                    location={item.location}
                    interested={interested}
                    setInterested={setInterested}
                />
                ))) : (null)}
            </GridItem>
            <GridItem rowSpan={12} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' bg="gray.400">
                    <Center><text p={40} fontSize={50}>Outdoors</text></Center>
            </Box>
            {outdoorSuggestions.length ? (outdoorSuggestions.map((item) => (
                  <TravelAttraction
                    name={item._id}
                    description={item.description}
                    location={item.location}
                    interested={interested}
                    setInterested={setInterested}
                />
                ))) : (null)}
            </GridItem>
            <GridItem rowSpan={12} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' bg="gray.400">
                    <Center><text p={40} fontSize={50}>Shopping</text></Center>
            </Box>
            {shoppingSuggestions.length ? (shoppingSuggestions.map((item) => (
                  <TravelAttraction
                    name={item._id}
                    description={item.description}
                    location={item.location}
                    interested={interested}
                    setInterested={setInterested}
                />
                ))) : (null)}
            </GridItem>
            <GridItem rowSpan={12} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' bg="gray.400">
                    <Center><text p={40} fontSize={50}>Nightlife</text></Center>
            </Box>
            {nightlifeSuggestions.length ? (nightlifeSuggestions.map((item) => (
                  <TravelAttraction
                    name={item._id}
                    description={item.description}
                    location={item.location}
                    interested={interested}
                    setInterested={setInterested}
                />
                ))) : (null)}
            </GridItem>
            <GridItem rowSpan={12} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' bg="gray.400">
                    <Center><text p={40} fontSize={50}>Food</text></Center>
            </Box>
            {foodSuggestions.length ? (foodSuggestions.map((item) => (
                  <TravelAttraction
                    name={item._id}
                    description={item.description}
                    location={item.location}
                    interested={interested}
                    setInterested={setInterested}
                />
                ))) : (null)}
            </GridItem>
        </Grid>
        <Center>
          <Button bg='green.200' size='lg' borderColor='teal.600' borderWidth={4} onClick={()=>{toPlanner()}}>
            Continue
          </Button>
        </Center>

    </ChakraProvider>
  );
}

export default SuggestionPage;
