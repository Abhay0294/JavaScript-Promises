export function decodeFilePath(filePath) {
  var filename = filePath.replace(/^.*[\\\/]/, '');
  var folder = filePath.replace(filename, '');
  folder = folder.replace(/file:\/\/\//g, '');
  folder = folder.replace(/%3A/g, ':').replace(/%5C/g, '/');
  console.log('Hello', folder);
  return folder + filename;
}
