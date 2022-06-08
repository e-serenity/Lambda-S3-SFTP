const fs = require("fs");

//module.exports.sshPrivateKey = serverless => {
module.exports.sshPrivateKey = () => {
  //serverless.cli.consoleLog(serverless);
  //serverless.cli.consoleLog(serverless.variable.options.stage);
  //console.log(serverless.variables);
  // if (
  //   !serverless.options.stage ||
  //   serverless.options.stage !== "local"
  // )
  //   return "not-set";

  const keyFile = "integration-test/tmp/ssh-key/sftptest";
  //console.log(`Serverless: reading key from file ${keyFile}...`);
  const privateKeyString = fs.readFileSync(keyFile);
  // serverless.cli.consoleLog(`key = ${privateKeyString}`);
  // console.log(`Key returned : ${privateKeyString}`);
  return privateKeyString;
};
