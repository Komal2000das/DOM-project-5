var arr = [
  {
    dp: "https://images.unsplash.com/photo-1508606572321-901ea443707f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
    story:
      "https://images.unsplash.com/photo-1512646737873-990ddc1a8e48?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1517246375798-77649c539a8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3DD",
    story:
      "https://images.unsplash.com/photo-1563218819-7d963896383b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1515468381879-40d0ded81044?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
    story:
      "https://images.unsplash.com/photo-1606301977767-4b56a3b1a98f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1551621955-fa07d4b1376b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
    story:
      "https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1600114226761-37f637047294?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
    story:
      "https://images.unsplash.com/photo-1544653221-ad0e0e59b25c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
    story:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsfGVufDB8MXwwfHx8Mg%3D%3D",
  },
];
var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += ` <div class="story">
<img id="${idx}"src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 2000);
});
