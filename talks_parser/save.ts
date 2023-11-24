import fs from 'fs';
export const saveToFile = (filename: string, data: any) => {
  fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('An error occurred:', err);
      return;
    }
    console.log('File has been saved.');
  });
};
