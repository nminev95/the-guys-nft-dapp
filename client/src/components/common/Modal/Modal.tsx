import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import Button from '../Button/Button'

const Modal = ({ isOpen, onClose }: any) => {
  return (
    <div className="Modal">
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>asdasdasds</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={() => {}}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </div>
  )
}

export default Modal
