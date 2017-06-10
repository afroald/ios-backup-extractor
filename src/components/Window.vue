<template>
  <div class="window">
    <div class="test">Test</div>
    <ui-button>test</ui-button>
  </div>
</template>

<script>
  import UiButton from 'keen-ui/lib/UiButton';

  export default {
    name: 'window',
    components: {
      UiButton,
    },
  };
</script>

<style lang="scss">
  .test {
    color: red;
  }
</style>
