let likes = [9, 12, 9];

let elementLikes = document.querySelectorAll(".userLikes");

function like(index) {
  likes[index] = likes[index] + 1;
  elementLikes[index].innerText = likes[index] + " like(s)";
}
