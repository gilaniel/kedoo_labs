import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Bg from "../assets/1.png";

export const About = () => {
  return (
    <Flex alignItems="center" my={7} id="about">
      <Box w="50%" mr={6} pl="88px">
        <Heading
          color="black"
          fontWeight={600}
          fontSize="60px"
          lineHeight="72px"
          mb={6}
          as="h1"
        >
          Kedoo labs
        </Heading>
        <Text fontSize="20px" lineHeight="30px" fontWeight={400} maxW="480px">
          Российский разработчик уникальных IT решений в области анализа данных
          и управления бизнесом
        </Text>
      </Box>
      <Box w="50%">
        <Image src={Bg.src} />
      </Box>
    </Flex>
  );
};
