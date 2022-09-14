export default {
  baseStyle: {
    addon: {
      userSelect: "none",
    },
  },
  sizes: {
    md: {
      field: {
        h: "44px",
        px: 3,
        py: 0,
        borderRadius: "8px",
        fontSize: "16px",
        zIndex: 5,
        background: "white!important",
      },
    },
  },
  variants: {
    outline: {
      field: {
        boxShadow: "0px 1px 2px rgba(16, 24, 40, .05)",
        border: "1px solid",
        borderColor: "#D0D5DD",
        color: "black",
        _placeholder: {
          color: "#667085",
        },
        _hover: {
          borderColor: "#667085",
        },
        _focus: {
          borderColor: "#667085",
          zIndex: 5,
          ring: 0,
        },
        _invalid: {
          borderColor: "red.300",
          boxShadow: "none",
          _focus: {
            borderColor: "red.300",
            boxShadow: "none",
          },
        },
      },
    },
  },
  defaultProps: {
    variant: "outline",
    colorScheme: "main",
  },
};
