import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Bg from "../assets/1.png";

export const About = () => {
  return (
    <Flex
      alignItems="center"
      my={7}
      id="about"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        mr={{ base: 0, md: 6 }}
        mb={{ base: 6, md: 0 }}
        pl={{ base: "0px", lg: "88px" }}
        textAlign={{ base: "center", md: "start" }}
      >
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
        <Text
          fontSize="20px"
          lineHeight="30px"
          fontWeight={400}
          maxW={{ base: "100%", md: "480px" }}
        >
          Российский разработчик уникальных IT решений в области анализа данных
          и управления бизнесом
        </Text>
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Image src={Bg.src} />
      </Box>
    </Flex>
  );
};
