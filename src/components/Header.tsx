import { Box, Icon, Input, Stack, Image } from "@chakra-ui/react";
import React from "react";
import { BsChatDots, BsCompass, BsHeart, BsHouseDoor } from "react-icons/bs";

interface Props {}

const Header: React.FC = (props: Props) => {
  return (
    <Box
      borderBottomWidth={1}
      borderBottomColor="gray.300"
      width="100%"
      backgroundColor="white"
      height="64px"
      top={0}
      position="fixed"
      zIndex={999}
    >
      <Stack maxWidth="4xl" margin="auto" direction="column" padding={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" width={32}></Image>
          <Input
            display={{ base: "none", md: "block" }}
            variant="outline"
            width={48}
            height={8}
            placeholder="Enter search"
            fontSize="sm"
            textAlign="center"
          ></Input>
          <Stack direction="row" spacing={4}>
            <Icon as={BsHouseDoor} w={6} h={6} />
            <Icon as={BsChatDots} w={6} h={6} />
            <Icon as={BsCompass} w={6} h={6} />
            <Icon as={BsHeart} w={6} h={6} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
