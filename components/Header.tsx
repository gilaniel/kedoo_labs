import React from "react";
import { Box, Flex, Image, List } from "@chakra-ui/react";

import Logo from "../assets/logo.svg";
import { useScrollspy, useScroll } from "../hooks/useScroll";

export const Header = () => {
  const ids = ["about", "projects", "partners", "jobs"];
  const activeId = useScrollspy(ids, 230);
  const { handleClick } = useScroll();

  return (
    <Box mx="112px" py="58px">
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Image src={Logo.src} w="182px" />

        <Flex
          fontSize="16px"
          sx={{
            ".active": {
              borderBottom: "1px solid",
              borderColor: "#0BA5EC",
            },
          }}
        >
          <Flex
            mr={8}
            className={activeId === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
            cursor="pointer"
          >
            О компании
          </Flex>
          <Flex
            mr={8}
            className={activeId === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
            cursor="pointer"
          >
            Проекты
          </Flex>
          <Flex
            mr={8}
            className={activeId === "partners" ? "active" : ""}
            onClick={() => handleClick("partners")}
            cursor="pointer"
          >
            Партнеры
          </Flex>
          <Flex
            mr={8}
            className={activeId === "jobs" ? "active" : ""}
            onClick={() => handleClick("jobs")}
            cursor="pointer"
          >
            Вакансии
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
