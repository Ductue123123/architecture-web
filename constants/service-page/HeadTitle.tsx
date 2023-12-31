import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type HeadTitleProps = {
  title: string,
}

const HeadTitle = (props: HeadTitleProps) => {
  return (
  <Box maxW={"1250px"} mx={"auto"}>
    <Flex w={"100%"} bgColor={"#2B395D"} p={"10px"} fontSize={"19px"} fontWeight={700} color={"white"} 
      justifyContent={['center','center','flex-start','flex-start']}>
      <Text>
        {props.title}
      </Text>
    </Flex>
  </Box>
  )
}

export default HeadTitle