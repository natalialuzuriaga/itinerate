import React, { useRef } from 'react'

import { useDrop, useDrag } from "react-dnd";
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'

import { ItemTypes } from './ItemTypes.js'

const ActivityCard = ({id, title, index, moveCard}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    // const { attributes, listeners, setNodeRef } = useDraggable({
    //     id: props.title,
    //     data: {
    //         title: props.title,
    //         index: props.index,
    //         parent: props.parent
    //     }
    // })

    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
      accept: ItemTypes.CARD,
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item, monitor) {
        console.log(item, "item");
        console.log(monitor, "monitor");
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
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            size="md"
            padding="5"
            // {...attributes}
            // {...listeners}
            // ref={setNodeRef}
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://assets.website-files.com/62aba60b94cb7948698926f0/6307becb922f3daccae12877_Blog%20-%20Hollywood%20Sign-Main%20(7)-p-800.jpg'
                alt='Caffe Latte'
            />
            <Stack>
                <CardBody>
                <Heading size='md'>{title}</Heading>
                <Text py='2'>
                The Hollywood Hike is a popular hiking trail in the Hollywood Hills of Los Angeles, California. It begins at the Griffith Observatory and winds its way up to the Hollywood Sign, offering spectacular views of the city and the iconic sign along the way. The trail is approximately 3 miles long and is rated as moderate in difficulty, making it suitable for most hikers.
                </Text>
                </CardBody>
            <CardFooter>
                <Button ref={btnRef} onClick={onOpen} variant='solid' colorScheme='blue'>
                    More Info
                </Button>
            </CardFooter>
            </Stack>
            </Card>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text py='2'>
                    The Hollywood Hike is a popular hiking trail in the Hollywood Hills of Los Angeles, California. It begins at the Griffith Observatory and winds its way up to the Hollywood Sign, offering spectacular views of the city and the iconic sign along the way. The trail is approximately 3 miles long and is rated as moderate in difficulty, making it suitable for most hikers.
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ActivityCard;
