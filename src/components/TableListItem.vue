<template>
  <li
      :key="table.id"
      class="list-group-item d-flex justify-content-between align-items-start"
  >
    <div class="ms-2 me-auto">
      <h5 class="mb-1">{{ table.name }}</h5>
      <p
          class="mb-1"
          @click="$emit('selectPack', table.packID)"
      >
        <a href="#" class="link-dark">{{ table.packTitle }}</a>
      </p>
      <small>{{ table.host }}</small>
    </div>
    <button type="button" class="btn btn-dark">Войти</button>
  </li>
</template>

<script>
export default {
  name: "TableListItem",
  props: {
    table: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>