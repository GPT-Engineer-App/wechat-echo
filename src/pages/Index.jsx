import { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, IconButton, Avatar, Flex } from "@chakra-ui/react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

const messagesData = [
  { id: 1, text: "Hello!", sender: "other" },
  { id: 2, text: "Hi there!", sender: "me" },
  { id: 3, text: "How are you?", sender: "other" },
];

const Index = () => {
  const [messages, setMessages] = useState(messagesData);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: "me" }]);
      setInputValue("");
    }
  };

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" p={0}>
      <Box bg="gray.100" p={4} borderBottom="1px solid" borderColor="gray.200">
        <Text fontSize="xl" fontWeight="bold">
          WeChat Clone
        </Text>
      </Box>
      <VStack spacing={4} flex={1} overflowY="auto" p={4} bg="white">
        {messages.map((message) => (
          <Flex key={message.id} w="100%" justify={message.sender === "me" ? "flex-end" : "flex-start"}>
            <HStack spacing={2} alignItems="flex-end">
              {message.sender === "other" && <Avatar name="Other User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzc1MjA0Mnww&ixlib=rb-4.0.3&q=80&w=1080" />}
              <Box bg={message.sender === "me" ? "green.100" : "gray.100"} p={3} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "me" && <Avatar name="Me" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzc1MjA0Mnww&ixlib=rb-4.0.3&q=80&w=1080" />}
            </HStack>
          </Flex>
        ))}
      </VStack>
      <HStack p={4} borderTop="1px solid" borderColor="gray.200" bg="gray.50">
        <IconButton aria-label="Emoji" icon={<FaSmile />} />
        <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
        <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
      </HStack>
    </Container>
  );
};

export default Index;
