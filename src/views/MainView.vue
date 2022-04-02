<script setup>

</script>

<template>
  <main>
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">Что? Где? Когда?</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Используя метод мозгового штурма, команда из шести игроков «знатоков» ищет в течение одной минуты правильный ответ на специально подобранный вопрос телезрителя. За правильный ответ очко получает команда знатоков, за неправильный же очко получают их противники — команда телезрителей. Побеждает команда, первой набравшая шесть очков.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
              type="button"
              class="btn btn-primary btn-lg px-4 gap-3"
              @click="$router.push(`/tables`)"
          >
            Поиск стола</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Кнопка</button>
        </div>
      </div>
    </div>
  </main>
</template>
