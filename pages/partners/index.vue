<template>
  <section id="wrapper-dark"></section>
</template>

<script>
export default {
  middleware({ redirect, app }) {
    return redirect(app.localePath("/partners/conference"));
  }
};
</script>

<style lang="scss"></style>
