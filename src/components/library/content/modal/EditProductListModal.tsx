import React, { FormEvent, useEffect, useState } from "react";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ModalFormSection,
  useCustomToast,
  ModalContainer,
  useFormData,
  InputData,
  ModalHeader,
  ModalFooter,
  FormMain,
  DiscardButton,
  ModalSubmitButton,
  useUpdateByIdMutation,
} from "../..";

type CreateModalProps = {
  dataModel: InputData<any>[];
  children?: React.ReactNode;
  path?: string;
  type?: "post" | "update";
  id: string;
  title?: string;
  data: any;
  productKey?: any;
};

const EditProductListModal = ({
  data,
  dataModel,
  children,
  path = "nexa",
  title,
  type,
  productKey,
  id,
}: CreateModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useFormData<any>(dataModel, data);

  const [trigger, result] = useUpdateByIdMutation();

  const onModalOpen = () => {
    setFormData(data);
    onOpen();
  };

  const { isSuccess, isLoading, isError, error } = result;

  const [changedData, setChangedData] = useState({});

  useCustomToast({
    successText: "Contnt Updated",
    isSuccess,
    isError,
    isLoading,
    error,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    trigger({
      id: id,
      body: { ...formData, key: productKey },
      path: `/contents/product/${path}`,
      invalidate: ["content", "product", "products"],
    });
  };

  const onModalClose = () => {
    setFormData({});
    result.reset();
    onClose();
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      onModalClose();
    }
  }, [isLoading]);

  return (
    <>
      <Flex onClick={onModalOpen}>{children || title || path}</Flex>

      <Modal
        size="2xl"
        isOpen={isOpen}
        onClose={onModalClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <ModalHeader>{`Update ${title}`}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody px={6}>
              {/* <Text>{JSON.stringify(formData)}</Text> */}
              <ModalFormSection>
                <FormMain
                  fields={dataModel}
                  formData={formData}
                  setFormData={setFormData}
                  setChangedData={setChangedData}
                  hasProductlistKey={productKey ? true : false}
                  isModal={true}
                />
              </ModalFormSection>
            </ModalBody>
            <ModalFooter>
              <DiscardButton mr={2} onClick={onModalClose}>
                Discard
              </DiscardButton>
              <ModalSubmitButton isLoading={isLoading}>
                Confirm
              </ModalSubmitButton>
            </ModalFooter>
          </form>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default EditProductListModal;
