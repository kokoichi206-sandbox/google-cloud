import * as functions from "@google-cloud/functions-framework";

// functions.http("sample", (req, res) => {
//   res.status(200).send("tempura");
// });

// For esbuild
export const sampleEsBuild: functions.HttpFunction = async (req, res) => {
  res.status(200).send("sampleEsBuild");
  console.log(req.body);
};
