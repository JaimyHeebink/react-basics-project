import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="outline"
    bgColor="white"
    placeholder="Search recipes"
    width="60%"
    onChange={onChange}
    {...props}
  />
);
