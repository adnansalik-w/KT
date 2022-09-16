let demo = document.getElementById("demo");
demo.addEventListener("mouseup", (e) => {
  console.log(e.button);
  console.log(demo.src);
  if (e.button == 0)
    demo.src =
      "https://c.tenor.com/Bt0LRAH3OXgAAAAM/bye-cartoon.gif";
  else
    demo.src = 'https://c.tenor.com/6aNDWPF18CkAAAAM/star-tamtl%C4%B1.gif';
});
