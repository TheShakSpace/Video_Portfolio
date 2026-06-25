const fs = require('fs');

const p1Path = `C:\\Users\\Sakshi\\.gemini\\antigravity\\brain\\90c54ae5-1156-4771-a101-7277910bcaef\\.system_generated\\steps\\76\\content.md`;
const p2Path = `C:\\Users\\Sakshi\\.gemini\\antigravity\\brain\\90c54ae5-1156-4771-a101-7277910bcaef\\.system_generated\\steps\\164\\content.md`;

function printRepoContext(filePath, repoName) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const idx = content.indexOf(`href="/TheShakSpace/${repoName}"`);
    if (idx !== -1) {
      console.log(`=== ${repoName} in ${filePath} ===`);
      console.log(content.substring(idx, idx + 1000).replace(/\s+/g, ' '));
      console.log('-'.repeat(50));
    }
  } catch (err) {
    console.error(err);
  }
}

printRepoContext(p1Path, 'Sheshark-Web');
printRepoContext(p1Path, 'SheShark-App');
printRepoContext(p1Path, 'ShakSpace_OS');
