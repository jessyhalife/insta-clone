import { Stack } from "@chakra-ui/react";
import React from "react";

import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

import Stories from "./Stories";

const Feed: React.FC = () => {
  return (
    <>
      <Stack direction="column" spacing={8} width="100%">
        <Stories />
        <Stack
          direction="column"
          spacing={16}
          width="xl"
          margin="auto"
          maxWidth="100%"
        >
          <Post />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </Stack>
      </Stack>
    </>
  );
};

export default Feed;
