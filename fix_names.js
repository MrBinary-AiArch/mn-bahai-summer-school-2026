const fs = require('fs');
const files = [
    '/root/projects/WSBS/website/repo/public/about-us.html',
    '/root/projects/WSBS/website/repo/public/recreation-and-activities.html'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace standard spaced version
    content = content.replace(/William Sears Bah&aacute;'&iacute; School/g, 'MN Bah&aacute;\'&iacute; School');
    
    // Replace non-breaking space version
    content = content.replace(/William Sears&nbsp;Bah&aacute;'&iacute; School/g, 'MN&nbsp;Bah&aacute;\'&iacute; School');

    fs.writeFileSync(file, content, 'utf8');
});
console.log('Fixed missing name instances.');
