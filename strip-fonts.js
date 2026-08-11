const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove style={{ fontFamily: "'Inter', sans-serif" }} completely
      content = content.replace(/style=\{\{\s*fontFamily:\s*"'Inter',\s*sans-serif"\s*\}\}/g, '');
      
      // Remove fontFamily: "'Inter', sans-serif", from combined styles
      content = content.replace(/fontFamily:\s*"'Inter',\s*sans-serif"\s*,?\s*/g, '');
      
      // Remove fontFamily: "'Montserrat', 'Inter', sans-serif", 
      content = content.replace(/fontFamily:\s*"'(Montserrat|Inter)',\s*'(Montserrat|Inter)',\s*sans-serif"\s*,?\s*/g, '');
      
      // Clean up empty style={{ }}
      content = content.replace(/style=\{\{\s*\}\}/g, '');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Processed ${fullPath}`);
    }
  }
}

processDir(path.join(__dirname, 'src/components'));
processDir(path.join(__dirname, 'src/app'));
