import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { MyTree } from './components/my-tree';
import { MyLeaf } from './components/my-leaf';
import tree from '../tree.json';

export type TreeParams = {
  id: number,
  items?: any
};

function drawTree(tree: TreeParams, elem: HTMLElement): void {
  const nodeId: number = tree.id;
  
  const textId: string = nodeId.toString();

  if(tree.items) {    
    const branch = new MyTree();

    branch.setAttribute('treeId', textId);

    elem.appendChild(branch);

    tree.items.forEach((item) => {drawTree(item, branch)});
  } else {
    const leaf = new MyLeaf();

    leaf.setAttribute('leafId', textId);

    elem.appendChild(leaf);
  };
};

const root: HTMLElement = document.getElementById('root');

drawTree(tree, root);