import { remote } from 'electron';

const { dialog } = remote;

export default function showOpenDialog(browserWindow) {
  const paths = dialog.showOpenDialog(browserWindow, {
    properties: ['openDirectory'],
  });

  if (!paths) {
    throw new Error('No paths selected');
  }

  return paths[0];
}
