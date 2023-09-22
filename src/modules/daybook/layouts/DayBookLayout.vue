<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4"><Entrylist /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import("@/modules/daybook/components/NavBar.vue")
    ),
    Entrylist: defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryList.vue")
    ),
  },
};
</script>

<style lang="scss" scoped></style>
