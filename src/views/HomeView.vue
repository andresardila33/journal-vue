<template>
  <h1>Hola Mundo</h1>
  <button @click="getToDaybook" class="btn btn-primary">Primary</button>
  <button @click="getToDaybook" class="btn btn-secondary">Secondary</button>
  <button @click="getToDaybook" class="btn btn-success">Success</button>
</template>
<script>
export default {
  methods: {
    getToDaybook() {
      this.$router.push({ name: "daybook" });
    },
  },
};
</script>
