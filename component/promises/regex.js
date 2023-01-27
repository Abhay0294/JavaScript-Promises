export function decodeFilePath(filePath) {
  var filename = filePath.replace(/^.*[\\\/]/, '');
  var folder = filePath.replace(filename, '').replace('c:', 'C:');
  folder = folder.replace(/file:\/\/\//g, '');
  folder = folder.replace(/%3A/g, ':').replace(/%5C/g, '/');
  folder = folder.replace('c:', 'C:');
  return folder + filename;
}
