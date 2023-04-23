import React from 'react';
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
  Checkbox, CheckboxGroup

} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';
import TravelAttraction from '../components/TravelAttraction';

function SuggestionPage(props) {
    const [value, setValue] = React.useState(50); // set initial value
    const handleChange = (newValue) => {
        setValue(newValue);
      };
      const loc = useLocation();
      const location = loc.state.location;
      const duration = loc.state.duration;  
      console.log("logging location")
      console.log(location)
      return (
    <ChakraProvider theme={theme}>
        <Grid
            h='auto'
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
            padding={8}
            minChildWidth='120px' spacing='40px'
            >
            {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
            <GridItem alignItems="center" rowSpan={1} colSpan={4} bg='green.200' fontSize={35} height='auto' textAlign='center'>
                <Heading>{location}</Heading>
                <div>{duration} Days</div>
            </GridItem>
            {/* <GridItem colSpan={2} bg='papayawhip' /> */}
            <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
                <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
                    <Center><text p={40} fontSize={50}>Attractions</text></Center>
                </Box>
                <TravelAttraction
                    name="Eiffel Tower"
                    description="The Eiffel Tower is a lattice tower on the Champ de Mars in Paris, France."
                    location="Paris, France"
                />
                <TravelAttraction
                    name="Great Wall of China"
                    description="The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials."
                    location="China"
                    />
                <TravelAttraction
                name="Machu Picchu"
                description="Machu Picchu is a 15th-century citadel situated on a ridge 2,430 metres (7,970 ft) above sea level."
                location="Peru"
                />
            </GridItem>
            <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
                    <Center><text p={40} fontSize={50}>Outdoors</text></Center>
            </Box>
            <TravelAttraction
            name="Yosemite National Park"
            description="Yosemite National Park is located in the western Sierra Nevada and is renowned for its granite cliffs."
            location="California, United States"
            />

            <TravelAttraction
            name="The Great Barrier Reef"
            description="The Great Barrier Reef is the largest reef system, located in the Coral Sea off the coast of Australia."
            location="Queensland, Australia"
            />

            <TravelAttraction
            name="Banff National Park"
            description="Banff National Park is located in the Canadian Rockies and is known for its turquoise lakes."
            location="Alberta, Canada"
            />
            </GridItem>
            <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
                    <Center><text p={40} fontSize={50}>Leisure</text></Center>
                </Box>
            </GridItem>
            <GridItem rowSpan={4} colSpan={1} borderRadius='10px' bg='blue.100'>
            <Box margin={15} borderRadius='18px' maxW="960px" mx="auto" bg="gray.400">
                    <Center><text p={40} fontSize={50}>Nightlife</text></Center>
                </Box>
            </GridItem>
        </Grid>

    </ChakraProvider>
  );
}

export default SuggestionPage;
