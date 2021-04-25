const getPath = require("./getPath");

const testHTML = `
<html>
  <body id="main" class="main-class">
    <section class="container">
      <div id="box-1">
        <p>Text 1</p>
        <p>Text 2</p>
				<p>Text 3</p>
        <ul>
          <li class="list-item">item 1 <a class="link" href="#">link</a></li>
          <li class="list-item">item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
      <div id="box-2">
        <p><a class="link" href="#">link</a></p>
      </div>
    </section>
  </body>
</html>   
`;

document.body.innerHTML = testHTML;

test("getPath should return different selectors", () => {
  let li1 = document.querySelectorAll("ul > li")[2];
  let li2 = document.querySelectorAll("ul > li")[3];

  expect(getPath(li1)).not.toBe(getPath(li2));
});

test("getPath should return className with nth-child", () => {
  let li = document.querySelectorAll("ul > .list-item")[1];
	
  expect(getPath(li)).toMatch(".list-item:nth-child(2)");
});

test("getPath should return nth-child(2) for second p", () => {
  let p = document.querySelectorAll("#box-1 > p")[1];

  expect(getPath(p)).toMatch("p:nth-child(2)");
});

test("getPath should return 'body' for document.body", () => {
  let body = document.body;

  expect(getPath(body)).toMatch("body")
});

test("getPath should return only one unique selector", () => {
  let elem = document.querySelector(".container > #box-1 > ul > li:nth-child(1) > .link");
  let selector = getPath(elem);
  let elemsLength = document.querySelectorAll(selector).length;

  expect(elemsLength).toBe(1);
});