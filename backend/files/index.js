// File handling
const fs = require("fs");

// // Sync Call
// fs.writeFileSync("./test.txt", "writing in file using fs.writeFileSync");

// // Async Call
// fs.writeFile(
//   "./test2.txt",
//   "writing in file using fs.writeFile (async)",
//   (err) => {}
// );

// fs.readFile("./contacts.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// To append i.e. adding something without overwriting
fs.appendFileSync("./test.txt", "Appending text using apendFileSync\n");
fs.appendFileSync("./test.txt", `${Date.now().toLocaleString()} user logged\n`);

// Copy file
fs.cpSync("./test.txt", "copy.txt");
// Delete file | Remove File
fs.unlinkSync("./copy.txt");

// Get Stats
console.log(fs.statSync("./test.txt"));
