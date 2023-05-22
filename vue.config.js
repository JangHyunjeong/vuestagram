const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    name: "뷰스타그램",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      // 제외하고싶은 파일명
      exclude: [/\.map$/, /manifest\.json$/, "index.html"],
    },
  },
});
