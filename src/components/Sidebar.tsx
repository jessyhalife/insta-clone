import { Box, SkeletonCircle, Stack, Text } from "@chakra-ui/react";
import React from "react";



const Sidebar: React.FC = () => {
  return (
    <Stack direction="column" display={{ base: "none", lg: "block" }}>
      <Stack
        paddingY={4}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexShrink={0}
        overflowX="auto"
        overflowY="hidden"
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <SkeletonCircle h={10} w={10}></SkeletonCircle>
          <Box>
            <Text fontWeight="bold" fontSize="sm">
              jessyhalife
            </Text>
            <Text fontSize="xs" color="gray.500">
              JENI DEL ESTERO
            </Text>
          </Box>
        </Stack>
        <Text color="blue.400" fontWeight="bold" fontSize="xs">
          Cambiar
        </Text>
      </Stack>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={4}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <SkeletonCircle h={9} w={9}></SkeletonCircle>
            <Box>
              <Text fontWeight="bold" fontSize="sm">
                jessyhalife
              </Text>
              <Text color="gray.500" fontSize="xs">
                Nuevo en instagram
              </Text>
            </Box>
          </Stack>

          <Text fontSize="xs" fontWeight="bold" color="blue.400">
            Seguir
          </Text>
        </Stack>
        <Stack
          marginTop={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <SkeletonCircle h={9} w={9}></SkeletonCircle>
            <Box>
              <Text fontWeight="bold" fontSize="sm">
                nadinesoy
              </Text>
              <Text
                color="gray.500"
                fontSize="xs"
                maxWidth={32}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                tuvieja y 1 más siguen esta cuenta
              </Text>
            </Box>
          </Stack>

          <Text fontSize="xs" fontWeight="bold" color="blue.400">
            Seguir
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Sidebar;
