import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Item = ({
  title,
  desc,
  icon,
  bg,
  isReverse = false,
  shadow = "none",
}) => {
  return (
    <Flex alignItems="center" flexDirection={isReverse ? "row-reverse" : "row"}>
      <Box w="50%" mr={4} pl={isReverse ? "96px" : 7}>
        <Image src={icon} mb={6} w="48px" h="48px" />
        <Heading
          fontWeight={600}
          fontSize="30px"
          lineHeight="38px"
          color="black"
          mb={4}
        >
          {title}
        </Heading>
        <Text fontWeight={400} lineHeight="28px" maxW="537px">
          {desc}
        </Text>
      </Box>

      <Box w="50%">
        <Image src={bg} w="100%" boxShadow={shadow} />
      </Box>
    </Flex>
  );
};
