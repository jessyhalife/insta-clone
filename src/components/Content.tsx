import { Box, SkeletonCircle, Stack, Text } from "@chakra-ui/react";

import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

interface Props {}

const Content: React.FC = (props: Props) => (
  <>
    <Stack
      direction="row"
      margin="80px auto"
      maxWidth={{ base: "xl", lg: "4xl" }}
      spacing={16}
      paddingX={{ base: "1px", md: 0 }}
    >
      <Feed />
      <Sidebar />
    </Stack>
  </>
);

export default Content;
