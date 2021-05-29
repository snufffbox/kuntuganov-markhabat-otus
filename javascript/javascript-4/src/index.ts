import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { MyTree } from './components/my-tree';
import { MyLeaf } from './components/my-leaf';
import tree from '../tree.json';

interface TreeParams {
  id: number,
  items?: TreeParams[]
};

function drawTree(tree: TreeParams, elem: HTMLElement): void {
  let nodeId: number = tree.id;

  if(tree.items) {    
    const branch = new MyTree();

    branch.setAttribute('treeId', nodeId.toString());

    elem.appendChild(branch);

    tree.items.forEach((item) => {drawTree(item, branch)});
  } else {
    const leaf = new MyLeaf();

    leaf.setAttribute('leafId', nodeId.toString());

    elem.appendChild(leaf);
  };
};

const root: HTMLElement = document.getElementById('root');

drawTree(tree, root);