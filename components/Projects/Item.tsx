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
    <Flex
      alignItems="center"
      flexDirection={isReverse ? "row-reverse" : "row"}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      mb={{ base: 6, md: 0 }}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        mr={{ base: 0, md: 4 }}
        pl={{ base: "0", md: isReverse ? "96px" : 7 }}
        mt={4}
        textAlign={{ base: "center", md: "start" }}
      >
        <Image src={icon} mb={6} w="48px" h="48px" display="inline-block" />
        <Heading
          fontWeight={600}
          fontSize="30px"
          lineHeight="38px"
          color="black"
          mb={4}
        >
          {title}
        </Heading>
        <Text
          fontWeight={400}
          lineHeight="28px"
          maxW={{ base: "100%", md: "537px" }}
          mb={{ base: 6, md: 0 }}
        >
          {desc}
        </Text>
      </Box>

      <Box w={{ base: "100%", md: "50%" }}>
        <Image src={bg} w="100%" boxShadow={shadow} />
      </Box>
    </Flex>
  );
};
