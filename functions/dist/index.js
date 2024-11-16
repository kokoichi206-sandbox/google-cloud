"use strict";
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  sampleEsBuild: () => sampleEsBuild
});
module.exports = __toCommonJS(src_exports);
var sampleEsBuild = async (req, res) => {
  res.status(200).send("sampleEsBuild");
  console.log(req.body);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sampleEsBuild
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSBcIkBnb29nbGUtY2xvdWQvZnVuY3Rpb25zLWZyYW1ld29ya1wiO1xuXG4vLyBmdW5jdGlvbnMuaHR0cChcInNhbXBsZVwiLCAocmVxLCByZXMpID0+IHtcbi8vICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXCJ0ZW1wdXJhXCIpO1xuLy8gfSk7XG5cbi8vIEZvciBlc2J1aWxkXG5leHBvcnQgY29uc3Qgc2FtcGxlRXNCdWlsZDogZnVuY3Rpb25zLkh0dHBGdW5jdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuc2VuZChcInNhbXBsZUVzQnVpbGRcIik7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPTyxJQUFNLGdCQUF3QyxPQUFPLEtBQUssUUFBUTtBQUN2RSxNQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssZUFBZTtBQUNwQyxVQUFRLElBQUksSUFBSSxJQUFJO0FBQ3RCOyIsCiAgIm5hbWVzIjogW10KfQo=
