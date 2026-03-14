import nextra from "nextra";

const withNextra = nextra({ latex: true });

export default withNextra({
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
});
