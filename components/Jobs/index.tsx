import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Data from "../../content/jobs.json";
import Bg from "../../assets/vac.png";
import { Item } from "./Item";

export const Jobs = () => {
  return (
    <Box px="60px" id="jobs">
      <Box pt="96px" mb="64px" px={8}>
        <Text
          color="#026AA2"
          fontSize="16px"
          fontWeight={600}
          lineHeight="24px"
          mb={3}
        >
          We’re hiring!
        </Text>

        <Heading fontSize="36px" lineHeight="44px" mb={5} color="black">
          Наши вакансии
        </Heading>
        <Text fontSize="20px" lineHeight="30px" fontWeight={400} maxW="768px">
          Хотите присоединиться к нашей команде? <br /> Мы ищем целеустремленных
          и увлеченных людей, любящих решать интересные задачи
        </Text>
      </Box>

      <Flex alignItems="flex-start" px={8}>
        <Box w="50%" pr="32px">
          {Data.map((item, i) => (
            <Item key={i} data={item} />
          ))}
        </Box>
        <Box w="50%" textAlign="end">
          <Image src={Bg.src} display="inline-block" />
        </Box>
      </Flex>
    </Box>
  );
};
