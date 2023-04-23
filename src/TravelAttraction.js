import { Box, Heading, Text, Button } from '@chakra-ui/react';
import {useState} from 'react';

export default function TravelAttraction({ name, description, location }) {
  const [bgColor, setBgColor] = useState('pink.100');
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    console.log("COMPONENT CLICKED")
    console.log(selected);
    if (selected === 0) {
      setBgColor('green.100');
      setSelected(1);
    }
    else {
      setBgColor('pink.100');
      setSelected(0);
    }
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      p="6"
      m="4"
      onClick={handleClick}
    >
      <Heading as="h2" size="md" mb="2">
        {name}
      </Heading>
      <Text fontSize="md" mb="4">
        {description}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {location}
      </Text>
    </Box>
  );
}






