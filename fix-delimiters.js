const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'studyLibrary.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Count occurrences before
const beforeCount = (content.match(/content: \\\\\\\\/g) || []).length;
console.log(`Found ${beforeCount} occurrences of malformed delimiters`);

// Replace the malformed delimiters with proper backticks
// The pattern is: content: \\\\\\
// We want to replace it with: content: `
content = content.replace(/content: \\\\\\\\/g, 'content: `');

// Also replace closing \\\\\\  that appear on their own line with closing backtick
content = content.replace(/^\s*\\\\\\\\\s*$/gm, '`');

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Template literal delimiters fixed successfully!');
console.log('File has been updated.');
