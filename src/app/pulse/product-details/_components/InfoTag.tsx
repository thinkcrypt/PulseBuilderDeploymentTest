import useColors from "@/components/library/hooks/useColors";
import NormalText from "@/components/text/NormalText";
import { Box, BoxProps, Center } from "@chakra-ui/react";
import { FC } from "react";

type InfoTagProps = BoxProps & {
  basic: any;
  title: string;
  content?: any;
  value: string | number;
  css: any;
};

const InfoTag: FC<InfoTagProps> = ({
  basic,
  content,
  title,
  value,
  css,
  ...props
}) => {
  const colors = useColors();

  return (
    <Box
      bg={css?.badgeBg}
      display="inline-block"
      px="1rem"
      py=".4rem"
      borderRadius="24px"
      {...props}
    >
      <Center>
        <NormalText
          color={css?.textSecondary}
          fontSize="14px"
          basic={basic}
          mr="4px"
        >
          {`${title}:`}
        </NormalText>
        <NormalText
          basic={basic}
          color={css?.badgeFg ? css?.badgeFg : css?.textPrimary}
          fontSize="14px"
          fontWeight="600"
        >{` ${value}`}</NormalText>
      </Center>
    </Box>
  );
};

export default InfoTag;
