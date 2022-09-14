import { Box, Flex, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import Countries from "../content/countries.json";

import Arrow from "../assets/arrow.svg";

import { motion } from "framer-motion";

export const Codes = ({ onChange }) => {
  const [selected, setSelected] = useState({
    code: "+7",
    iso: "RU",
  });
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const [data, setData] = useState(Countries);

  const dropRef = useRef<any>("");

  const handleClickOutside = (e: any) => {
    if (
      e.target.className.indexOf("drop") === -1 &&
      dropRef.current &&
      !dropRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  const handleInputChange = (e: any) => {
    const q = e.target.value.toLowerCase();

    if (q) {
      setData(
        Countries.filter((item) => item.name.toLowerCase().indexOf(q) > -1)
      );
    }
  };

  useEffect(() => {
    if (dropRef.current) {
      onChange(selected.code);
      setScroll(dropRef.current.scrollTop);
      setOpen(false);
    }
  }, [selected]);

  useEffect(() => {
    if (dropRef.current && isOpen) {
      dropRef.current.scrollTo(0, scroll);
      setData(Countries);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Box
      pos="absolute"
      w="50px"
      zIndex={6}
      left="12px"
      top="50%"
      fontSize="16px"
      fontWeight={400}
      transform="translateY(-50%)"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setOpen(!isOpen)}
        className="code-drop"
        cursor="pointer"
        color="black"
      >
        {selected.iso}

        <Image
          src={Arrow.src}
          className="code-drop"
          transform={`rotate(${isOpen ? 180 : 0}deg)`}
          transition="transform .2s ease"
        />
      </Flex>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Box
            pos="absolute"
            left="-12px"
            top="calc(100% + 8px)"
            w="250px"
            bgColor="white"
            border="1px solid"
            borderColor="#e9e9e9"
            boxShadow="md"
            borderRadius={8}
          >
            <Input
              borderRadius={0}
              autoFocus
              h="36px"
              className="code-drop"
              onChange={handleInputChange}
            />
            <Box maxH="220px" overflow="auto" ref={dropRef}>
              {data.map((item) => (
                <Box
                  px="12px"
                  py={2}
                  fontSize="14px"
                  key={item.iso}
                  cursor="pointer"
                  bgColor={selected.iso === item.iso ? "#f7f7f7" : "white"}
                  _hover={{ bgColor: "#f7f7f7" }}
                  color="black"
                  onClick={() => {
                    setSelected(item);
                  }}
                >
                  {item.name}
                </Box>
              ))}
              {!data.length && (
                <Box
                  px="12px"
                  py={2}
                  fontSize="14px"
                  _hover={{ bgColor: "#f7f7f7" }}
                  color="black"
                >
                  Не найдено
                </Box>
              )}
            </Box>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};
