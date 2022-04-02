<template>
  <a
      href="#"
      :key="table.id"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
  >
    <div class="ms-2 me-auto">
      <h5 class="mb-1">{{ table.name }}</h5>
      <p class="mb-1">{{ table.packTitle }}</p>
      <small>{{ table.host }}</small>
    </div>
    <button type="button" class="btn btn-dark">Войти</button>

  </a>
</template>

<script>
export default {
  name: "TableListItem",
  props: {
    table: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>