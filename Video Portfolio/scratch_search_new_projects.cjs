const fs = require('fs');

const githubHtmlPath = `C:\\Users\\Sakshi\\.gemini\\antigravity\\brain\\90c54ae5-1156-4771-a101-7277910bcaef\\.system_generated\\steps\\76\\content.md`;
const netlifyJsPath = `C:\\Users\\Sakshi\\.gemini\\antigravity\\brain\\90c54ae5-1156-4771-a101-7277910bcaef\\.system_generated\\steps\\34\\content.md`;

function searchInFile(filePath, projectName) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const idx = content.toLowerCase().indexOf(projectName.toLowerCase());
    if (idx !== -1) {
      console.log(`Found "${projectName}" in ${filePath}:`);
      console.log(content.substring(idx - 100, idx + 500).replace(/\s+/g, ' '));
      console.log('-'.repeat(40));
    } else {
      console.log(`"${projectName}" NOT found in ${filePath}`);
    }
  } catch (err) {
    console.error(err);
  }
}

const targets = ['sheshark', 'pirates', 'shakspace_os'];
for (const t of targets) {
  console.log(`\n=== Searching for: ${t} ===`);
  searchInFile(githubHtmlPath, t);
  searchInFile(netlifyJsPath, t);
}
