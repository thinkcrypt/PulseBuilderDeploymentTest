"use client";

import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

import {
  HoverContentContainer,
  login,
  useAppDispatch,
  useCustomToast,
} from "@/components/library";
import { useRouter } from "next/navigation";
import { useLgoinMutation } from "@/store/services/authApi";
import FormControlComp from "./FormControlComp";
import { TextButtonSimple } from "../../_core-components/components/button";
import PrimaryBtn from "./PrimaryBtn";
import FormInfoText from "./FormInfoText";
import SecondaryBtn from "./SecondaryBtn";

type LoginUiProps = BoxProps & {
  basic: any;
  content: any;
  data?: any;
  path?: any;
  dataModel?: any;
  handleUiPage?: (value: string) => void;
};

const LoginUi: FC<LoginUiProps> = ({
  data: loginData,
  path,
  content,
  basic,
  dataModel,
}) => {
  const router = useRouter();
  const [trigger, result] = useLgoinMutation();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { data, error, isError, isLoading, isSuccess } = result;

  useCustomToast({
    isError,
    isSuccess,
    error: error,
    isLoading,
    successText: "Login successful",
    successTitle: "Success",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trigger(formData);
  };

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(login(result.data));
      router.push("./dashboard/my-profile");
    }
  }, [isLoading]);

  const css = content?.authModalCss;
  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Login Information"
      data={content}
      edit={true}
      dataModel={dataModel}
      position="sticky"
      top="0"
      //   w="full"
    >
      <Box
        maxW="500px"
        w="full"
        mt="4rem"
        bg={css?.bgColor}
        px="2rem"
        py="3rem"
        mx="auto"
        borderRadius={"6px"}
        box-shadow="0 7px 30px -10px rgba(150,170,180,0.5)"
      >
        <form onSubmit={handleSubmit}>
          <FormControlComp
            label="E-Mail"
            placeholder="E-Mail"
            type={"email"}
            isRequired={true}
            css={css}
            value={formData.email}
            name={"email"}
            onChange={handleFormData}
          />

          <FormControl mb="2rem">
            <Flex justifyContent="space-between" alignItems="center" mb=".5rem">
              <FormLabel
                fontWeight={css?.labelWeight || 600}
                fontSize={`${css?.labelSize || 12}px`}
                mb="0px"
              >
                Password
              </FormLabel>
              <TextButtonSimple
                fontWeight={css?.labelWeight || 600}
                fontSize={`${css?.labelSize || 12}px`}
                basic={basic}
                css={css}
              >
                Forgotten Password?
              </TextButtonSimple>
            </Flex>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
            />
          </FormControl>

          <Box>
            <PrimaryBtn isLoading={isLoading} type="submit" css={css}>
              Login
            </PrimaryBtn>
          </Box>
          <Box my="1.5rem">
            <FormInfoText basic={basic} css={css}>
              Don`&apos;t have an account?
            </FormInfoText>
          </Box>

          <Box>
            <SecondaryBtn css={css}>Create Your Account</SecondaryBtn>
          </Box>
        </form>
      </Box>
    </HoverContentContainer>
  );
};

export default LoginUi;
