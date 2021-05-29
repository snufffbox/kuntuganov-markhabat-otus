const path = require('path');
const fs = require('fs');

const dirTree = {
  files: [],
  dirs: []
};

const dirPath = process.argv.slice(2)[0];

async function runScript(dirPath) {
  if (!dirPath) {
    console.log("Wrong input argument: you should specify path");

    return;
  };

  return await getDirTree(dirPath);
};

async function getDirTree(dirPath, result = dirTree) {  
  if (!result.dirs.includes(dirPath)) 
    result.dirs.push(dirPath);
  
  const dir = await fs.promises.opendir(dirPath);

  for await (const d of dir) {
    const file = path.posix.join(dirPath, d.name);
    d.isDirectory() ? await getDirTree(file) : result.files.push(file);
  };
  
  return result;
};

runScript(dirPath)
  .then(tree => console.log(tree))
  .catch(console.error);