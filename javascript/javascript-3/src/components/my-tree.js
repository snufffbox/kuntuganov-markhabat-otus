const tmplTree = document.createElement('template');

tmplTree.innerHTML = `
  <style>
    .tree {
      background: #966F33;
      width: 15px;
      padding: 5px;
      border: 2px solid grey;
      margin: 10px 25px;
      text-align: center;
      color: yellow;
    }
  </style>
  <div class="tree">
      <slot name="treeId"></slot>
      <slot></slot>
  </div>
`;

class MyTree extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  };

  connectedCallback() {
    this.shadowRoot.appendChild(tmplTree.content.cloneNode(true));
    const treeElem = this.shadowRoot.querySelector('slot[name="treeId"]');
    treeElem.innerHTML = this.getAttribute('treeId');
  };
};

customElements.define('my-tree', MyTree);