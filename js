document.addEventListener("DOMContentLoaded", function () {
  const imageInput = document.getElementById("imageInput");
  const textInput = document.getElementById("textInput");
  const postButton = document.getElementById("postButton");
  const posts = document.getElementById("posts");

  postButton.addEventListener("click", function () {
    const imageFile = imageInput.files[0];
    const text = textInput.value;

    if (imageFile && text) {
      const post = document.createElement("div");
      post.className = "post";

      const image = document.createElement("img");
      const reader = new FileReader();
      reader.onload = function () {
        image.src = reader.result;
      };
      reader.readAsDataURL(imageFile);

      const textElement = document.createElement("p");
      textElement.textContent = text;

      post.appendChild(image);
      post.appendChild(textElement);
      posts.appendChild(post);

      imageInput.value = "";
      textInput.value = "";
    }
  });
});
