import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Item } from "./Item";

import icon1 from "../../assets/eye.svg";
import bg1 from "../../assets/2.png";

import icon2 from "../../assets/pc.svg";
import bg2 from "../../assets/3.png";

import icon3 from "../../assets/world.svg";
import bg3 from "../../assets/4.png";

import icon4 from "../../assets/heart.svg";
import bg4 from "../../assets/5.png";

export const Projects = () => {
  return (
    <Box id="projects">
      <Box pt="80px" mb="80px" textAlign="center">
        <Heading
          fontWeight={600}
          fontSize="36px"
          lineHeight="44px"
          mb={5}
          color="black"
        >
          Наши проекты
        </Heading>
        <Text
          fontSize="20px"
          lineHeight="30px"
          maxW="768px"
          mx="auto"
          my={0}
          fontWeight={400}
        >
          Индивидуальный подход, нестандартные решения и всегда гарантированный
          результат.
        </Text>
      </Box>

      <Item
        icon={icon1.src}
        bg={bg1.src}
        title="Аналитическая платформа"
        desc="BIG DATA платформа, позволяющая собирать и анализировать статистику по развитию  более 200 миллионов каналов в сервисе YouTube и в других социальных сетях."
      />
      <Item
        isReverse
        icon={icon2.src}
        bg={bg2.src}
        title="Система управления ресурсами (ERP)"
        desc="BIG DATA платформа, позволяющая собирать и анализировать статистику по развитию  более 200 миллионов каналов в сервисе YouTube и в других социальных сетях."
      />
      <Item
        icon={icon3.src}
        bg={bg3.src}
        title="Campaing radar"
        desc="Платформа по анализу рекламных интеграций блогеров в социальных сетях"
      />
      <Item
        isReverse
        icon={icon4.src}
        bg={bg4.src}
        shadow="2px 4px 5px #5cf2d9a6"
        title="Система управления дистрибуции контента "
        desc="Платформа по управлению, редактированию и дистрибуции профессионального видео и музыкального контента в цифровой среде"
      />
    </Box>
  );
};
