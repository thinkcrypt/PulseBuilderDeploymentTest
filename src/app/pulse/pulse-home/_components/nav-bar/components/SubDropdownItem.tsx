// import { FlexColumn, NormalText } from "@/components";
import { FlexColumn } from "@/components/common";
import useColors from "@/components/library/hooks/useColors";
import { NormalText } from "../../text";
import Link from "next/link";
import { FC } from "react";

type SubDropdownItemProps = {
  css: any;
  basic: any;
  dropdown: {
    link: string;
    text: string;
  };
};

const SubDropdownItem: FC<SubDropdownItemProps> = ({
  css,
  basic,
  dropdown,
}) => {
  const colors = useColors();
  return (
    <>
      <FlexColumn>
        <Link href={dropdown?.link}>
          <NormalText
            px={2}
            py={1}
            fontSize="14px"
            css={css}
            basic={basic}
            _hover={{
              bg: colors?.hoverColor,
              color: "white",
            }}
          >
            {dropdown?.text}
          </NormalText>
        </Link>
      </FlexColumn>
    </>
  );
};

export default SubDropdownItem;
