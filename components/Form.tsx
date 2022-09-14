import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Codes } from "./Codes";
import { Drop } from "./Drop";
import { useForm } from "react-hook-form";

const emailRegExp =
  /^(([\w-\s]+)|([\w-]+(?:\.[\w-]+)*)|([\w-\s]+)([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [mask, setMask] = useState<any>("+7");
  const [file, setFile] = useState<any[]>([]);

  const onSubmit = (data: any) => {
    const formData = new FormData();

    if (file.length) {
      formData.append("files", file[0]);
    }

    Object.entries(data).map((item: any) => {
      formData.append(item[0], item[1]);
    });
  };

  return (
    <Box w="100%" bgColor="white" pos="relative" py="96px">
      <Box
        pos="absolute"
        left={0}
        top={0}
        h="100%"
        bgColor="white"
        w="3000px"
        zIndex={1}
      ></Box>
      <Box pos="relative" zIndex={2} maxW="512px" w="100%" mx="auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex mb={6}>
            <FormControl w="50%" pr={4}>
              <FormLabel>Имя</FormLabel>
              <Input
                placeholder="Ваше имя"
                isInvalid={!!errors.name}
                {...register("name", { required: true })}
              />
            </FormControl>
            <FormControl w="50%" pl={4}>
              <FormLabel>Фамилия</FormLabel>
              <Input placeholder="Ваше фамилия" {...register("surname")} />
            </FormControl>
          </Flex>

          <FormControl mb={6}>
            <FormLabel>Тема</FormLabel>
            <Input
              placeholder="Тема"
              isInvalid={!!errors.subject}
              {...register("subject", { required: true })}
            />
          </FormControl>

          <FormControl mb={6}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="you@company.com"
              isInvalid={!!errors.email}
              {...register("email", {
                required: true,
                pattern: {
                  value: emailRegExp,
                  message: "error",
                },
              })}
            />
          </FormControl>

          <FormControl mb={6}>
            <FormLabel>Телефонный номер</FormLabel>
            <Box pos="relative">
              <Codes onChange={setMask} />
              <Input
                type="phone"
                placeholder={mask}
                pos="relative"
                onKeyPress={(event) => {
                  if (!/[+0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                sx={{
                  zIndex: "1!important",
                }}
                pl="80px"
                {...register("phone")}
              />
            </Box>
          </FormControl>

          <FormControl mb={6}>
            <FormLabel>Сообщение</FormLabel>
            <Textarea
              placeholder="Оставьте Ваше сообщение"
              isInvalid={!!errors.desc}
              {...register("desc", { required: true })}
            />
          </FormControl>

          <Drop file={file} onChange={setFile} />

          <Box mb={8} fontSize="16px" fontWeight={400}>
            <Checkbox
              {...register("policy", { required: true })}
              isInvalid={!!errors.policy}
            >
              Вы согласны с нашей политикой конфиденциальности
            </Checkbox>
          </Box>

          <Button
            type="submit"
            bgColor="#0BA5EC"
            color="white"
            w="100%"
            h="48px"
            _hover={{ bgColor: "#0a8cc7" }}
            _active={{ bgColor: "#0c6e9b" }}
          >
            Отправить
          </Button>
        </form>
      </Box>
    </Box>
  );
};
