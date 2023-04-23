import React, { useRef } from 'react'

import { useDrop, useDrag } from "react-dnd";
import { Button, Center, Grid, GridItem, Card, CardBody, CardFooter, Heading, Image, VStack, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Img} from '@chakra-ui/react'

import { ItemTypes } from './ItemTypes.js'

const ActivityCard = ({id, index, moveCard, title, description, picture, location, cost, type }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
      accept: ItemTypes.CARD,
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        // Determine mouse position
        const clientOffset = monitor.getClientOffset()
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex)
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex
      },
    })
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD,
      item: () => {
        return { id, index }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
    <div ref={ref} data-handler-id={handlerId}>
        <Card
            direction={{ base: 'column', sm: 'column' }}
            overflow='hidden'
            variant='outline'
            size="md"
            padding="5"
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                // htmlHeight={}
                src={picture}
                alt='Event Picture'
            />
            <VStack>
                <CardBody>
                <Heading size='md'>{title}</Heading>
                </CardBody>
                <Button size="sm" padding="3" ref={btnRef} onClick={onOpen} variant='solid' colorScheme='blue'>
                    More Info
                </Button>
            </VStack>
            </Card>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior="inside"
                h='auto'
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader fontSize="xl">{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Grid h='auto'
                  templateRows='repeat(4, 1fr)'
                  templateColumns='repeat(5, 1fr)'>
                   <GridItem alignItems="center" rowSpan={4} colSpan={3} borderRadius="8px"
                 height='auto' textAlign='center' bg='gray.200' p={5}>
                       <Text fontWeight='italic' mb='1rem'>
                 {description}
                 </Text>
                  </GridItem>
                  <GridItem alignItems="center" rowSpan={4} colSpan={2} borderRadius="8px"
                 height='auto' textAlign='center'>
                  <Text fontWeight='italic' mb='1rem'>
                 {type}
                 </Text>
                 <Text fontWeight='italic' mb='1rem'>
                 {cost}
                 </Text>
                 <Text fontWeight='italic' mb='1rem'>
                 {location}
                 </Text>
                  </GridItem>
                  </Grid>
                </ModalBody>
                <Center>
                <Image
                objectFit='cover'
                p={8}
                maxW={{ base: '100%'}}
                // htmlHeight={}
                src={picture}
                alt='Event Picture'
            />
                </Center>
                <ModalFooter>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ActivityCard;
