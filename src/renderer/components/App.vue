<template>
  <div v-if="state !== null" :class="$style.app">
    <div v-if="state.status == 'new'" :class="$style['open-dialog']">
      <open-dialog @path="openBackup"></open-dialog>
    </div>

    <p v-if="state === 'opening'">Loading...</p>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron';
  import OpenDialog from './OpenDialog.vue';

  export default {
    name: 'App',
    components: { OpenDialog },
    data() {
      return { state: null };
    },
    methods: {
      openBackup(path) {
        ipcRenderer.send('open-backup', path);
      },
    },
  };
</script>

<style lang="scss">
  @import '../styles/base';
</style>

<style lang="scss" module>
  .app {
    height: 100%;
  }

  .open-dialog {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
