<template>
  <div>
    <ui-button @click="requestDialog">Select backup location</ui-button>
  </div>
</template>

<script>
  import { remote } from 'electron';
  import UiButton from 'keen-ui/lib/UiButton';

  const currentWindow = remote.getCurrentWindow();
  const dialog = remote.dialog;

  function openDialog() {
    return new Promise((resolve, reject) => {
      dialog.showOpenDialog(
        currentWindow,
        { properties: ['openDirectory'] },
        (paths) => {
          if (!paths) {
            return reject(new Error('No path selected'));
          }

          return resolve(paths[0]);
        },
      );
    });
  }

  export default {
    name: 'open-dialog',
    components: { UiButton },
    methods: {
      requestDialog() {
        openDialog().then((path) => {
          this.$emit('path', path);
        });
      },
    },
  };
</script>
