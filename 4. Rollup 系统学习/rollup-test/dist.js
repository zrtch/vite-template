var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var rollup_test_exports = {};
__export(rollup_test_exports, {
  default: () => rollup_test_default
});
module.exports = __toCommonJS(rollup_test_exports);

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

// index.js
console.log("hello rollup", package_default);
function hello() {
  console.log("hello1");
}
hello();
var rollup_test_default = hello;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
