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

function filterByContent(filter, data) {
  const { nationality, owners, channels, contents } = data;
  // owners : ["Linus", "James Hobson", "Mehdi", "Ryan George"]
  // channels: ["Linus Tech Tips", "Hacksmith", "ElectroBoom", "Ryan George"],
  // filter : Engineering
  // filteredOwners = ["James Hobson", "Mehdi"]
  const filteredOwners = [];
  // filteredChannels = ["Hacksmith", "ElectroBoom"]
  const filteredChannels = [];
  // filteredContents = ["Engineering-Invention", "Engineering-Comedy-Education"]
  const filteredContents = contents.filter((content, index) => {
    // content = "Comedy-Sketch"
    //  index = 3
    if (content.includes(filter)) {
      filteredOwners.push(owners[index]);
      filteredChannels.push(channels[index]);
      return true;
    }
  });

  return {
    nationality,
    filteredOwners,
    filteredChannels,
    filteredContents,
  };
}

// Example 1
const example = filterByContent("Engineering", rawDatas);
console.log({ example });
// const example = {
//   nationality: "Canada",
//   owners: ["James Hobson", "Mehdi"],
//   channels: ["Hacksmith", "ElectroBoom"],
//   contents: ["Engineering-Invention", "Engineering-Comedy-Education"],
// };

// Example 2
const example2 = filterByContent("Comedy", rawDatas);
console.log({ example2 });
// const example2 = {
//   nationality: "Canada",
//   owners: ["Mehdi", "Ryan George"],
//   channels: ["ElectroBoom", "Ryan George"],
//   contents: ["Engineering-Comedy-Education", "Comedy-Sketch"],
// };
