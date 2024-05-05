const { default: characters } = await import("../utils/characters.json", {
  with: { type: "json" },
});

// console.log("testing the characters => ", characters);

const charsCopy = structuredClone(characters);

console.log(charsCopy);
