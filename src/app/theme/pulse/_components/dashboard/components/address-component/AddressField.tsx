
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FC } from "react";

type AddressFieldProps = {
  isRequired: boolean;
  type: string; // Supports both "text" and "textarea"
  label: string;
  value: string | number;
  placeholder?: string;
  onChange: (value: string | number) => void;
  basic: any;
  css: any;
};

const AddressField: FC<AddressFieldProps> = ({
  isRequired,
  type,
  label,
  value,
  placeholder,
  onChange,
  basic,
  css,
}) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel
        color={css?.formLabelColor || "#7D8A9F"}
        fontFamily={basic?.primaryFont}
        fontSize={`${css?.formLabelSize || 14}px`}
        fontWeight={css?.formLabelWeight || 600}
      >
        {label}
      </FormLabel>
      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          border="none"
          rows={5}
          fontFamily={basic?.primaryFont}
          fontSize={`${css?.formInputSize || 14}px`}
          fontWeight={400}
          color={css?.formInputFg || "#373B3F"}
          bg={css?.formInputBg || "#F4F8F9"}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          border={"none"}
          onChange={(e) =>
            onChange(type === "number" ? +e.target.value : e.target.value)
          }
          fontFamily={basic?.primaryFont}
          fontSize={`${css?.formInputSize || 14}px`}
          fontWeight={400}
          color={css?.formInputFg || "#373B3F"}
          bg={css?.formInputBg || "#F4F8F9"}
        />
      )}
    </FormControl>
  );
};

export default AddressField;
