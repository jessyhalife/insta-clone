import {
  SkeletonCircle,
  Stack,
  Text,
  Textarea,
  Image,
  Icon,
} from "@chakra-ui/react";
import { BsHeart, BsChat, BsBookmark } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

import React from "react";

interface Props {}

const Post: React.FC = (props: Props) => {
  return (
    <Stack
      direction="column"
      borderWidth={1}
      borderColor="gray.200"
      minHeight={250}
      spacing={0}
    >
      <Stack
        backgroundColor="white"
        height="52px"
        borderBottomColor="gray.200"
        borderBottomWidth={1}
        justifyContent="space-between"
        alignItems="center"
        paddingX={4}
        direction="row"
      >
        <SkeletonCircle
          height={9}
          width={9}
          startColor="gray.300"
          endColor="gray.300"
        ></SkeletonCircle>
        <Text fontSize="xl" fontWeight="bold">
          ...
        </Text>
      </Stack>
      <Image src={"https://place-hold.it/400"} maxHeight={400} />
      <Stack direction="column" paddingTop={4} spacing={5}>
        <Stack
          direction="row"
          spacing={6}
          paddingX={4}
          justifyContent="space-between"
          paddingY={1}
        >
          <Stack direction="row" spacing={6} alignItems="center">
            <Icon as={BsHeart} w={6} h={6}></Icon>
            <Icon as={BsChat} w={6} h={6}></Icon>
            <Icon as={IoPaperPlaneOutline} w={6} h={6}></Icon>
          </Stack>
          <Icon as={BsBookmark} w={6} h={6}></Icon>
        </Stack>
        <Stack direction="row" alignItems="center" paddingX={4} spacing={1}>
          <SkeletonCircle
            w={5}
            h={5}
            startColor="gray.400"
            endColor="gray.400"
          ></SkeletonCircle>
          <Text fontSize="sm">
            Les gusta a <b>jessyhalife</b> y <b>12,509 personas más</b>
          </Text>
        </Stack>
        <Text paddingX={4}>
          <b>jessyhalife</b> Ay hola!este es mi primer post
          <Text color="blue.700">#probando #vsco</Text>
        </Text>
        <Text fontSize={10} paddingX={4} color="gray.500">
          HACE 7 HORAS
        </Text>
        <Textarea variant="unstyled" borderTopWidth={1}></Textarea>
      </Stack>
    </Stack>
  );
};

export default Post;
