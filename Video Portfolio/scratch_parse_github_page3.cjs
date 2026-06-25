const fs = require('fs');

const githubHtmlPath = `C:\\Users\\Sakshi\\.gemini\\antigravity\\brain\\90c54ae5-1156-4771-a101-7277910bcaef\\.system_generated\\steps\\170\\content.md`;

try {
  let content = fs.readFileSync(githubHtmlPath, 'utf8');

  // Find all repo names and print them
  const regex = /href="\/TheShakSpace\/([a-zA-Z0-9_-]+)"/g;
  let match;
  const repos = new Set();
  while ((match = regex.exec(content)) !== null) {
    repos.add(match[1]);
  }

  console.log("=== Page 3 Repositories ===");
  console.log(Array.from(repos));

  // Let's search for "pirate" or similar
  for (const repo of repos) {
    if (repo.toLowerCase().includes('pirate')) {
      console.log(`Found match on page 3: ${repo}`);
    }
  }

} catch (err) {
  console.error(err);
}
