(() => {
  // package.json
  var package_default = {
    dependencies: {
      "@rollup/plugin-alias": "^4.0.2",
      "@rollup/plugin-commonjs": "^23.0.4",
      "@rollup/plugin-json": "^5.0.2",
      "@rollup/plugin-node-resolve": "^15.0.1",
      react: "^18.2.0",
      rollup: "^3.7.0",
      "rollup-plugin-terser": "^7.0.2"
    },
    name: "rollup-test",
    version: "1.0.0",
    main: "index.js",
    type: "module",
    scripts: {
      test: "rollup -c rollup.config.js"
    },
    author: "",
    license: "ISC",
    description: "",
    devDependencies: {
      esbuild: "^0.16.4"
    }
  };

  // txt:./test.txt
  var test_default = ["\u8FD9\u662F\u6587\u672C", "['\u8FD9\u662F\u6587\u672C','\u5F88\u68D2']"];

  // index.js
  console.log("hello rollup", package_default, test_default);
  function hello() {
    console.log("hello1");
  }
  hello();
  var rollup_test_default = hello;
})();
