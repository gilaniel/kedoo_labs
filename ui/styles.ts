export default {
  global: ({ colorMode }) => ({
    body: {
      bg: "#fff",
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 500,
      color: "gray.100",
      lineHeight: "24px",
      overflowX: "hidden",
    },
    form: {
      w: "full",
    },
    a: {
      boxShadow: "none",
      _focus: {
        boxShadow: "none!important",
      },
    },
  }),
};
