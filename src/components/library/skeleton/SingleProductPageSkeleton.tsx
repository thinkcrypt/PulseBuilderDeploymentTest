import SectionPadding from "@/components/common/SectionPadding";
import { Box, Center, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";


const SingleProductPageSkeleton = () => {
  return (
    <SectionPadding my="4rem">
      <Grid gridTemplateColumns={"1fr 1fr"} gap={16}>
        <Box>
          <Skeleton w="full" height="400px" borderRadius="12px" />
        </Box>
        <Box>
          <Skeleton w="full" height="20px" borderRadius="4px" />
          <Box my="10px">
            <Skeleton w="200px" height="20px" borderRadius="4px" />
          </Box>
          <Box mt="60px">
            <SkeletonText
              mt="4"
              noOfLines={4}
              spacing="4"
              skeletonHeight="20px"
            />
          </Box>
          <Center mt="100px">
            <Skeleton w="full" height="30px" borderRadius="4px" />
          </Center>
        </Box>
      </Grid>
    </SectionPadding>
  );
};

export default SingleProductPageSkeleton;
