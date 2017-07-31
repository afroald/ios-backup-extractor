import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';

export default function installVueDevTools() {
  installExtension(VUEJS_DEVTOOLS)
    .then(() => {})
    .catch((err) => {
      console.log('Unable to install `vue-devtools`: \n', err);
    });
}
