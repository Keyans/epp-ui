module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "lerna-demo-test-ui",
        libDir: "lib",
        styleLibrary: {
          name: "styles",
          base: false,
          path: "[module].css",
        },
      },
    ],
  ],
};
