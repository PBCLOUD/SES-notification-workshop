import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { API } from 'aws-amplify'
import { createCandidate } from '../src/graphql/mutations'

export const ContactForm = ({ initialRef, onClose }) => {
  const toast = useToast()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    const { name, email } = formState
    if (name && email) {
      try {
        await API.graphql({
          query: createCandidate,
          variables: {
            input: {
              name,
              email,
            },
          },
        })

        toast({
          title: 'Congratulations',
          position: 'top-right',
          description: 'Successfully submitted!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        onClose()
      } catch (e) {
        toast({
          title: 'Error',
          position: 'top-right',
          description: e.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } else {
      toast({
        title: 'Uh-Oh 😥',
        position: 'top-right',
        description: 'Please verify all fields are filled out.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <ModalHeader>Fill the Form</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleContactFormSubmit}>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              ref={initialRef}
              placeholder='Isaac Newton'
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder='yourname@email.com'
              type='email'
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} type='submit'>
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    </>
  )
}
