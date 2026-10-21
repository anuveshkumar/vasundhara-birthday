const gallery = document.getElementById("photoGallery");

const imageExtension = "jpg";
const imageCount = 39;

// Notes remain in this order.
const notes = [
  {
    afterImage: 5,
    kicker: "I found you",
    text: "She speaks up your mind, like she’s speaking from your mind",
  },
  {
    afterImage: 11,
    kicker: "oblviously natural",
    text: "Nonchalantly, she's stepping over puddles, where others might get stuck to their divine",
    className: "note-wide note-center",
  },
  {
    afterImage: 18,
    kicker: "open and unafraid",
    text: "Kind and clear, she will play you like a tool, dare to suppose weakness is implied",
  },
  {
    afterImage: 25,
    kicker: "unapologetically beautiful",
    text: "You don’t doubt her beauty, her name is a declaration, must you care to think twice",
    className: "note-center",
  },
  {
    afterImage: 32,
    kicker: "wish you",
    text: "keep growing in all the ways that feel like you.",
    className: "note-wide",
  },
];

function createNote(note) {
  const card = document.createElement("aside");
  card.className = `gallery-note ${note.className || ""}`.trim();

  const kicker = document.createElement("p");
  kicker.className = "note-kicker";
  kicker.textContent = note.kicker;

  const message = document.createElement("p");
  message.textContent = note.text;

  card.append(kicker, message);
  return card;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const images = [];

for (let i = 1; i <= imageCount; i++) {
  const figure = document.createElement("figure");
  figure.className = "photo";

  const img = document.createElement("img");
  img.src = `images/image${String(i).padStart(2, "0")}.${imageExtension}`;
  img.alt = "Botanical photograph";
  img.loading = "lazy";
  img.decoding = "async";

  img.addEventListener("error", () => figure.remove(), { once: true });

  figure.appendChild(img);
  images.push(figure);
}

shuffle(images);

gallery.replaceChildren();

let noteIndex = 0;

for (let i = 0; i < images.length; i++) {
  gallery.appendChild(images[i]);

  const imagesShown = i + 1;

  if (
    noteIndex < notes.length &&
    imagesShown === notes[noteIndex].afterImage
  ) {
    gallery.appendChild(createNote(notes[noteIndex]));
    noteIndex++;
  }
}
