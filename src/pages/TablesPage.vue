<template>
  <div class="container w-50">
    <TableList
        @selectPack="selectPack"
        :tables="tables"
    />
    <PackModal
        :pack="selectedPack"
    />
  </div>
</template>

<script>
import TableList from "../components/TableList.vue";
import PackModal from "../components/PackModal.vue";
import axios from "axios";

let id = 0;

export default {
  name: "TablesView",
  components: {PackModal, TableList},
  data() {
    return {
      selectedPack: null,
      selectedPackIsLoading: false,
      tables: [
        {
          id: id++,
          name: 'Стол 1',
          score: '1:3',
          packID: '1703.18_u',
          packTitle: '17/03: Король vs Мерзляков',
          host: 'Cherilyn'
        },
        {
          id: id++,
          name: 'Стол 2',
          score: '6:3',
          packID: '17PFOst1_u',
          packTitle: 'II Интеллектуальная олимпиада ПФО среди студентов. Первый этап.',
          host: 'Егор'
        },
        {id: id++, name: 'Стол 3', score: '2:1', packID: '18plus', packTitle: 'Синхронный турнир "18+"', host: 'Иван'},
        {
          id: id++,
          name: 'Стол 4',
          score: '0:1',
          packID: 'harmony21.4_u',
          packTitle: 'Кубок гармонии — 2021. Элемент четвертый: Доброта',
          host: 'Семён'
        },
        {
          id: id++,
          name: 'Стол 5',
          score: '4:5',
          packID: 'sls21.4_u',
          packTitle: 'Лига Сибири — 2021/2022. IV тур',
          host: 'Гитарист'
        },
      ]
    }
  },
  mounted() {
  },
  methods: {
    async fetchPack(id) {
      try {
        this.selectedPackIsLoading = true;
        const response = await axios.get('http://www.db.chgk.info/packages/' + id, null);
        return response['data'];
      } catch (err) {
        alert('Error: ' + err);
      } finally {
        this.selectedPackIsLoading = false;
      }
    },
    async selectPack(id) {
      this.selectedPack = await this.fetchPack(id);
      if (this.selectedPack === undefined || this.selectedPack === null) {
        return;
      }

      let pack_modal = new bootstrap.Modal(document.getElementById('pack_modal'), null)
      await pack_modal.show();
    }
  }
}
</script>

<style scoped>

</style>