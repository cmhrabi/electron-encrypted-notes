import fs from 'fs';
import { decrypt } from './encryption';

export const openFile = async (password: string, files: Electron.OpenDialogReturnValue) => {
  if (!files) return;

  const file = files.filePaths[0];

  if (!file) return;
  const fileContent = fs.readFileSync(file).toString()

  const decryptedText = decrypt(fileContent, password)
  return {
    filePath: file,
    fileContent: decryptedText,
  }
}
