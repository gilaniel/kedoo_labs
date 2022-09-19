import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import Mail from "../assets/mail.svg";
import Loc from "../assets/loc.svg";
import { Form } from "./Form";

export const Bottom = () => {
  return (
    <Box bgColor="#F8F9FC">
      <Container maxW="1440px" px={0}>
        <Flex
          alignItems="flex-start"
          flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
        >
          <Box px="48px" py="96px" w={{ base: "100%", md: "464px" }}>
            <Heading mb={4} color="black" fontSize="24px" lineHeight="32px">
              Наши контакты
            </Heading>
            <Text mb="38px" fontWeight={400} fontSize="18px" lineHeight="28px">
              Основные каналы связи
            </Text>

            <Flex alignItems="flex-start">
              <Image src={Mail.src} transform="translateY(5px)" />
              <Box ml="18px">
                <Text color="black" fontSize="20px" lineHeight="30px" mb={2}>
                  Напишите нам
                </Text>
                <Text fontSize="16px" fontWeight={400} mb={5}>
                  Мы любим новые знакомства и всегда готовы помочь!
                </Text>

                <Link
                  href="mailto:hi@untitledui.com"
                  color="#026AA2"
                  fontSize="16px"
                >
                  hi@untitledui.com
                </Link>
              </Box>
            </Flex>

            <Flex alignItems="flex-start" mt={8}>
              <Image src={Loc.src} transform="translateY(1px)" />
              <Box ml="18px">
                <Text color="black" fontSize="20px" lineHeight="30px" mb={2}>
                  Заходите
                </Text>
                <Text fontSize="16px" fontWeight={400} mb={5}>
                  В гости :)
                </Text>

                <Link href="" color="#026AA2" fontSize="16px">
                  100 Smith Street <br /> Collingwood VIC 3066 AU
                </Link>
              </Box>
            </Flex>
          </Box>

          <Form />
        </Flex>
      </Container>
    </Box>
  );
};
