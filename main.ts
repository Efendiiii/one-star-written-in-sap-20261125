import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — make.fun competition
// u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
// A houseplant's one-star review of its human owner, under 280 characters.
const LINE =
  "One star: my owner waters me with yesterday's cold coffee, parks me three metres from the only window, and introduces me to guests as 'the low-maintenance one'. Low maintenance is doing a lot of heavy lifting here.";

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8 text
// of 1 to 279 characters, not only white space.
if (LINE.length < 1 || LINE.length > 279) {
  throw new Error(`entry must be 1-279 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Guard: what was written must read back byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("written entry does not match the line");
}
