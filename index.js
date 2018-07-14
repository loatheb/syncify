const execSync = require('child_process').execSync;

module.exports = function syncfy(asyncFunc) {
  const funcStr = asyncFunc.toString();
  const funcName = asyncFunc.name;
  return function(params) {
    const stdout = execSync(`node -e '${funcStr} (async function() { const res = await ${funcName}(${params}); }())'`);
    const output = Buffer.from(stdout).toString();
    if (output) {
      return output;
    }
  }
}
