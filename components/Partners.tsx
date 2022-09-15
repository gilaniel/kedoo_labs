import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Logo1 from "../assets/logo.svg";
import Logo2 from "../assets/km.svg";
import Logo3 from "../assets/zv.svg";
import Logo4 from "../assets/fr.svg";
import Logo5 from "../assets/3d.svg";
import Logo6 from "../assets/dq.svg";

export const Partners = () => {
  return (
    <Box
      bgColor="#F8F9FC"
      borderRadius={16}
      maxW="1216px"
      w="100%"
      p="64px"
      my="96px"
      mx="auto"
      id="partners"
    >
      <Text
        fontSize="20px"
        lineHeight="30px"
        fontWeight={400}
        textAlign="center"
        mb={8}
      >
        Наши партнеры
      </Text>

      <Flex alignItems="flex-end">
        <Box pr={10}>
          <Image src={Logo1.src} w="100%" />
        </Box>
        <Box pr={10}>
          <Image src={Logo2.src} w="100%" />
        </Box>

        <Box pr={10}>
          <Image src={Logo3.src} w="100%" />
        </Box>
        <Box pr={10}>
          <Image src={Logo4.src} w="100%" />
        </Box>
        <Box pr={10}>
          <Image src={Logo5.src} w="100%" />
        </Box>
        <Box>
          <Image src={Logo6.src} w="100%" />
        </Box>
      </Flex>
    </Box>
  );
};
