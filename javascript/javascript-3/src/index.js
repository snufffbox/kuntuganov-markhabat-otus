require('./components/my-tree');
require('./components/my-leaf');

const tree = require('../tree.json');

function drawTree(tree, elem) {
  const textNodeId = tree.id;
  
  if(tree.items) {
    const branch = document.createElement('my-tree');
    branch.setAttribute('treeId', textNodeId);
    elem.appendChild(branch);

    tree.items.forEach((item) => {drawTree(item, branch)});
  } else {
    const leaf = document.createElement('my-leaf');
    leaf.setAttribute('leafId', textNodeId);
    elem.appendChild(leaf);
  };
};

drawTree(tree, root);