import React from 'react';
import {
  ChakraProvider,
  Center,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Button,
  Image,
  Heading,
  Select,
  Grid,
  GridItem,
  theme,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const [duration, setDuration] = React.useState(50); // set initial value
    const [location, setLocation] = React.useState('None Chosen');
    const handleDurationChange = (newValue) => {
        setDuration(newValue);
      };
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/suggestion');
      }

      const toSuggestion=()=>{
        navigate('/suggestion',{state:{location:location, duration:duration/10}});
          }

  return (
    <ChakraProvider theme={theme}>
        <Grid
            h='850px'
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            >
            {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
            <GridItem rowSpan={3} colSpan={5} bg='green.200' fontSize={45} textAlign='center'>
                <Box borderRadius='18px' maxW="960px" mx="auto">
                <Select 
                value={location} placeholder='Where to?' fontSize={25} p='100px'
                bg='blue.100' textAlign='center' borderRadius={30}
                borderColor='teal.600' borderWidth={4}
                color='black' onChange={(e) => setLocation(e.target.value)}
                >
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='New York City'>New York City</option>
                </Select>
                </Box>
                <Box boxSize='xs' maxW="960px" mx="auto">
                <Center><Image boxSize='180px' src={logo} /></Center>
                </Box>
            </GridItem>
            {/* <GridItem colSpan={2} bg='papayawhip' /> */}
            <GridItem rowSpan={2} colSpan={5} bg='blue.100'>
            <Center p='10'><Heading textAlign='center'>
                    {/* <Text>Itinerate</Text> */}
                    </Heading></Center>

                <Box maxW="960px" mx="auto">
                    <Heading textAlign='center'>
                    <Text>How many days?</Text>
                    <Text>{duration/10}</Text>
                    </Heading>
                    <Slider aria-label='slider-ex-1' defaultValue={30} value={duration} onChange={handleDurationChange} step={10}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                    </Slider>
                    <Center p='10'>
                    <Button bg='green.200' size='lg' borderColor='teal.600' borderWidth={4} onClick={()=>{toSuggestion()}}>
                    {/* <Link
                    to={`/suggestion?location=${location}`}
                    > */}
                        Get Started!
                        {/* </Link> */}
                    </Button>
                    </Center>
                </Box>
            </GridItem>
            {/* <GridItem rowSpan={1} colSpan={5} bg='blue.100'></GridItem> */}
        </Grid>
{/* 
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default LandingPage;
