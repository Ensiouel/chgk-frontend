<template>
  <div class="container w-50">
    <TableList
      :tables="tables"
    />
  </div>
</template>

<script>
import TableList from "../components/TableList.vue";
let id = 0;

export default {
  name: "TablesView",
  components: {TableList},
  data() {
    return {
      tables: [
        {id: id++, name: 'Стол 1', score: '1:3', packTitle: 'Десятилетие Фабрики мыслей.', host: 'Cherilyn'},
        {id: id++, name: 'Стол 2', score: '6:3', packTitle: 'Футбольный асинхронный турнир "11 друзей Оуэна"', host: 'Егор'},
        {id: id++, name: 'Стол 3', score: '2:1', packTitle: 'I студенческий фестиваль "Кубок Двенадцати коллегий" (Санкт-Петербург)', host: 'Иван'},
        {id: id++, name: 'Стол 4', score: '0:1', packTitle: '"Кубок 12 коллегий - 2009" (Санкт-Петербург)', host: 'Семён'},
        {id: id++, name: 'Стол 5', score: '4:5', packTitle: '17/03: Король vs Мерзляков', host: 'Гитарист'},
      ]
    }
  }
}
</script>

<style scoped>

</style>