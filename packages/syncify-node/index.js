const execSync = require('child_process').execSync;

module.exports = function syncfy(asyncFunc) {
  const funcStr = asyncFunc.toString();
  const funcName = asyncFunc.name;
  return function(params) {
    execSync(`node -e '${funcStr} (async function() { const res = await ${funcName}(${params}); }())'`);
  }
}
