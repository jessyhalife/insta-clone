import { Stack } from "@chakra-ui/react";
import React from "react";

import Post from "./Post";

import Stories from "./Stories";

interface Props {}

const Feed: React.FC = (props: Props) => {
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
          <Post />
        </Stack>
      </Stack>
    </>
  );
};

export default Feed;
