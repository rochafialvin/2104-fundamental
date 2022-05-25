const rawDatas = {
  nationality: "Canada",
  owners: ["Linus", "James Hobson", "Mehdi", "Ryan George"],
  channels: ["Linus Tech Tips", "Hacksmith", "ElectroBoom", "Ryan George"],
  contents: [
    "Technology-Review",
    "Engineering-Invention",
    "Engineering-Comedy-Education",
    "Comedy-Sketch",
  ],
};

function filterByContent(filter, data) {}

// Example 1
filterByContent("Engineering");
const example = {
  nationality: "Canada",
  owners: ["James Hobson", "Mehdi"],
  channels: ["Hacksmith", "ElectroBoom"],
  contents: ["Engineering-Invention", "Engineering-Comedy-Education"],
};

// Example 2
filterByContent("Comedy");
const example2 = {
  nationality: "Canada",
  owners: ["Mehdi", "Ryan George"],
  channels: ["ElectroBoom", "Ryan George"],
  contents: ["Engineering-Comedy-Education", "Comedy-Sketch"],
};
