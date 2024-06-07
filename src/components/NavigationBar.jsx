import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.100" p={4} borderBottom="1px solid" borderColor="gray.200" display="flex" alignItems="center">
      <IconButton aria-label="Back" icon={<FaArrowLeft />} onClick={() => navigate("/")} mr={4} />
      <Text fontSize="xl" fontWeight="bold">
        WeChat Clone
      </Text>
    </Box>
  );
};

export default NavigationBar;
