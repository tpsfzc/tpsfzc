document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.getElementById("heroImage");
  const images = [
    "assets/images/oil1.jpg",
    "assets/images/oil2.jpg",
    "assets/images/oil3.jpg",
    "assets/images/oil4.jpg"
  ];
  
  let index = 0;
  setInterval(() => {
    index = (index + 1) % images.length;
    heroImage.src = images[index];
  }, 4000); // changes every 4 seconds
});
