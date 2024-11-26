import React from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ClickableImage = ({ src, alt }: { src: string; alt: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Clickable Thumbnail */}
      <Box cursor="pointer" onClick={onOpen}>
        <Image src={src} alt={alt} maxWidth="100%" borderRadius="md" />
      </Box>

      {/* Modal for Enlarged Image */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={src} alt={alt} borderRadius="md" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClickableImage;
