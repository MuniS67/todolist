let form = document.forms.todo;
let inp = form.querySelector("input");
let container = document.querySelector(".container");
let todos = [
  {
    id: Math.random(),
    title: "fjkdnsfljsdnf",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    isDone: true,
  },
  {
    id: Math.random(),
    title: "task 2",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    isDone: false,
  },
];

form.onsubmit = (e) => {
  e.preventDefault();

  let todo = {
    id: Math.random(),
    title: inp.value,
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    isDone: false,
  };

  todos.push(todo);
  reload(todos);
};

reload(todos);

function reload(arr) {
  container.innerHTML = "";

  for (let item of arr) {
    // a
    let mainDiv = document.createElement("div");
    let topDiv = document.createElement("div");
    let title = document.createElement("span");
    let removeBtn = document.createElement("button");
    let timeSpan = document.createElement("span");

    // b
    title.classList.toggle("done", item.isDone);

    mainDiv.classList.add("item");
    topDiv.classList.add("top");
    timeSpan.classList.add("time");

    title.innerHTML = item.title;
    removeBtn.innerHTML = "x";
    timeSpan.innerHTML = item.time;

    // c
    mainDiv.append(topDiv, timeSpan);
    topDiv.append(title, removeBtn);
    container.append(mainDiv);

    // d
    title.onclick = () => {
      item.isDone = !item.isDone;

      title.classList.toggle("done", item.isDone);
    };
    let mw_bg = document.createElement("div");
    let mw = document.createElement("div");
    let text = document.createElement("h5");
    let inp = document.createElement("input");
    let x = document.createElement("p");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    mw_bg.classList.add("mw_bg");
    mw.classList.add("mw");
    text.classList.add("h5");
    inp.classList.add("inp");
    x.classList.add("p");
    btn1.classList.add("btn");

    x.innerHTML = "&times;";
    btn1.innerHTML = "Send";

    document.body.append(mw_bg);
    mw_bg.append(mw);
    mw.append(text, inp, x, btn1);

    mainDiv.ondblclick = () => {
      mw_bg.classList.add("active");
      mw.classList.add("anim");
      text.innerHTML = `На что вы хотите заменить задачу: ${item.title}?`;
      inp.value = item.title;
      btn1.onclick = () => {
        item.title = inp.value;
        title.innerHTML = item.title;
        mw_bg.classList.remove("active");
      };
      x.onclick = () => {
        mw_bg.classList.remove("active");
        inp.value = "";
      };
      document.onkeyup = (event) => {
        event.preventDefault();
        if (event.keyCode === 27) {
          mw_bg.classList.remove("active");
          inp.value = "";
        }
      };
    };
  }
}
