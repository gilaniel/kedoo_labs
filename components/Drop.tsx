import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import Icon from "../assets/upload.svg";

export const Drop = ({ file, onChange }) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      multiple: false,
      maxFiles: 1,
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/svg+xml": [],
        "image/gif": [],
        "application/pdf": [],
      },
    });

  const acceptedFileItems = file.map((file: any) => {
    return (
      <Flex alignItems="center" mt={2} key={file.path}>
        <Tag backgroundColor="gray.950" fontWeight={400} py={1.5} px={2}>
          <TagLabel ml={2}>{file.path}</TagLabel>
          <TagCloseButton onClick={() => onChange([])} />
        </Tag>
      </Flex>
    );
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
    <Box key={file.path} fontSize="12px" color="black" fontWeight={400}>
      <Flex alignItems="center" mt={2}>
        <Text color="red.500">{file.path}</Text>
      </Flex>
      {errors.map((e) => (
        <Text size="body3" key={e.code}>
          {e.message}
        </Text>
      ))}
    </Box>
  ));

  useEffect(() => {
    onChange(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <Box mb={6}>
      <Box
        sx={{
          ".dropzone": {
            color: `main.500`,
            textAlign: "center",
            borderRadius: "4px",
            py: 2,
            bg: "transparent",
            borderColor: `main.500`,
            borderWidth: "2px",
            transition: "all .2s ease",
            cursor: "pointer",
          },
        }}
      >
        <Box
          {...getRootProps()}
          borderRadius="8px"
          border="1px solid"
          borderColor="#EAECF0"
          cursor="pointer"
          px={6}
          py={4}
        >
          <input {...getInputProps()} />
          <Box textAlign="center">
            <Image src={Icon.src} display="inline-block" mb={3} />
            <Text fontSize="12px" fontWeight={400} lineHeight="18px">
              <Text color="#026AA2" fontWeight={500} as="span">
                Нажмите для загрузки
              </Text>{" "}
              или перетяните сюда файл <br /> в формате PDF,SVG, PNG, JPG bkb
              GIF (max. 800x400px)
            </Text>
          </Box>
        </Box>
      </Box>

      {acceptedFileItems}
      {fileRejectionItems}
    </Box>
  );
};
