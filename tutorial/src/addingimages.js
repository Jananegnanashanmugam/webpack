import AppleImage from "./apple.jpg";

function addimages() {
  const img = document.createElement("img");
  img.src = AppleImage;
  const body = document.querySelector("body");
  body.append(img);
}

export default addimages;
