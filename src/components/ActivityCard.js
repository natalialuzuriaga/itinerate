import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'

const ActivityCard = (props) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "123"
    })
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            size="md"
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            //TODO: add the transform component?
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://assets.website-files.com/62aba60b94cb7948698926f0/6307becb922f3daccae12877_Blog%20-%20Hollywood%20Sign-Main%20(7)-p-800.jpg'
                alt='Caffe Latte'
            />
            <Stack>
                <CardBody>
                <Heading size='md'>Hollywood Hike</Heading>
                <Text py='2'>
                The Hollywood Hike is a popular hiking trail in the Hollywood Hills of Los Angeles, California. It begins at the Griffith Observatory and winds its way up to the Hollywood Sign, offering spectacular views of the city and the iconic sign along the way. The trail is approximately 3 miles long and is rated as moderate in difficulty, making it suitable for most hikers.
                </Text>
                </CardBody>
            </Stack>
            </Card>
    )
}

export default ActivityCard;
