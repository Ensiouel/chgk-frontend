<template>
  <Modal
    :id="'pack_modal'"
  >
    <template #title>
      {{ pack?.title }}
    </template>
    <template #body>
      Количество туров: {{ pack?.tours.length }} <br>
      Общее количество вопросов: {{ getQuestionCount }} <br>
      Описание: {{ pack?.info }}
    </template>
    <template #footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
    </template>
  </Modal>
</template>

<script>
import Modal from './UI/VModal.vue'

export default {
  name: "PackModal",
  components: {Modal},
  props: {
    pack: {
      default: {},
      type: Object
    }
  },
  computed: {
    getQuestionCount() {
      let count = 0;

      this.pack?.tours.forEach(tour => {
        count += tour.questions.length;
      })

      return count;
    }
  }
}
</script>

<style scoped>

</style>