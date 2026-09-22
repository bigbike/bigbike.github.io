(function () {
  "use strict";

  var link = document.getElementById("siggraph-asia-2026-image");
  if (!link) return;
  var image = link.querySelector("img");
  if (!image) return;

  var pictures = [
    { id: "7A", pose: "synchronized kicks" },
    { id: "7B", pose: "offset kicks" },
    { id: "7C", pose: "handstand and kick" },
    { id: "7D", pose: "lunges" },
    { id: "7E", pose: "front-facing handstand and kick" }
  ];
  var storageKey = "siggraph-asia-2026-image";
  var previous = null;
  try {
    previous = sessionStorage.getItem(storageKey);
  } catch (error) {
    // Random selection still works when browser storage is unavailable.
  }

  var choices = pictures.filter(function (picture) {
    return picture.id !== previous;
  });
  var selected = choices[Math.floor(Math.random() * choices.length)];
  var path = "images/publications/unified-flow-sa2026-" + selected.id;

  link.href = path + "-4k.png";
  image.src = path + "-thumb.jpg";
  image.alt = "Astronaut and robot: " + selected.pose + ", with the SIGGRAPH Asia 2026 logo";

  try {
    sessionStorage.setItem(storageKey, selected.id);
  } catch (error) {
    // The selected image and its full-size link do not depend on storage.
  }
}());
