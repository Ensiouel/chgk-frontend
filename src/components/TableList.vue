<template>
  <ol class="list-group">
    <TableListItem
        v-for="table in tables"
        :table="table"
        @selectPack="$emit('selectPack', table.packID)"
    />
  </ol>
</template>

<script>
import TableListItem from "./TableListItem.vue";

export default {
  name: "TableList",
  components: {TableListItem},
  props: {
    tables: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>