import inputStyles from "./input";

export default {
  sizes: {
    md: {
      minH: "134px",
    },
  },
  variants: {
    outline: inputStyles.variants.outline.field,
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
