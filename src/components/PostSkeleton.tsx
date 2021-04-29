import React from "react";
import {
  SkeletonCircle,
  Stack,
  Text,
  Textarea,
  Image,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { BsHeart, BsChat, BsBookmark } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

const PostSkeleton: React.FC = () => {
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
        paddingY={8}
        paddingX={5}
        direction="row"
      >
        <SkeletonCircle
          height={9}
          width={9}
          startColor="gray.200"
          endColor="gray.300"
        ></SkeletonCircle>
        <Text fontSize="xl" fontWeight="bold">
          ...
        </Text>
      </Stack>
      <Skeleton w="100%" h="400px"></Skeleton>
      <Stack direction="column" padding={4} spacing={5}>
        <Skeleton w="50%" h={2}></Skeleton>
        <Skeleton w="80%" h={2}></Skeleton>
        <Skeleton w="90%" h={2}></Skeleton>
        <Skeleton w="100%" h={2}></Skeleton>
        <Skeleton w="100%" h={2}></Skeleton>
      </Stack>
    </Stack>
  );
};

export default PostSkeleton;
