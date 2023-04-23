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
    const [value, setValue] = React.useState(50); // set initial value
    const handleChange = (newValue) => {
        setValue(newValue);
      };
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/planner');
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
                placeholder='Where to?' fontSize={25} p='100px'
                bg='blue.100' textAlign='center' borderRadius={30}
                borderColor='teal.600' borderWidth={4}
                color='black'
                >
                    <option value='option1'>Los Angeles</option>
                    <option value='option2'>New York City</option>
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
                    <Text>{value/10}</Text>
                    </Heading>
                    <Slider aria-label='slider-ex-1' defaultValue={30} value={value} onChange={handleChange} step={10}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                    </Slider>
                    <Center p='10'>
                    <Button bg='green.200' size='lg' borderColor='teal.600' borderWidth={4} onClick={handleClick}>
                    Get Started!
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
