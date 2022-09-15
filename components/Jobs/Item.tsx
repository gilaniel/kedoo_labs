import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Loc from "../../assets/jloc.svg";
import Time from "../../assets/time.svg";

export const Item = ({ data }) => {
  return (
    <Box mt="29px">
      <Box w="100%" h="1px" bgColor="#EAECF0" mb={6}></Box>
      <Flex alignItems="center" mb={2}>
        <Heading
          mr={2}
          fontWeight={500}
          fontSize="18px"
          lineHeight="28px"
          color="black"
        >
          {data.title}
        </Heading>

        <Flex
          alignItems="center"
          borderRadius={16}
          p="2px 10px 2px 8px"
          bgColor={data.bg}
        >
          <Box
            borderRadius="full"
            w="6px"
            h="6px"
            bgColor={data.circleColor}
            mr="7px"
          ></Box>
          <Text
            fontSize="14px"
            fontWeight={500}
            lineHeight="20px"
            color={data.color}
          >
            {data.tag}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize="16px" lineHeight="24px" fontWeight={400} mb={6}>
        {data.desc}
      </Text>

      <Flex
        alignItems="center"
        fontSize="16px"
        lineHeight="24px"
        fontWeight={500}
      >
        <Flex alignItems="center" mr={6}>
          <Image src={Loc.src} mr="10px" />
          Remote
        </Flex>
        <Flex alignItems="center">
          <Image src={Time.src} mr="10px" />
          Full-time
        </Flex>
      </Flex>
    </Box>
  );
};
