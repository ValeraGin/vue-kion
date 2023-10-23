<script setup lang="ts">
// REST GET REQUEST https://api.github.com/search/repositories?q=sometext
</script>

<template>
  <div class="container py-5">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          SEARCH: Реализовать поиск, отвечающий бизнес требованиям
        </h4>
        <div class="card-text">
          <ul>
            <li>Минимальное количество символов 3</li>
            <li>Одинаковые запросы не должны отправляться</li>
            <li>Отправка запроса через 1 секунду после окончания ввода</li>
            <li>Вывести изображения с items[n].owner.avatar_url</li>
          </ul>
        </div>
      </div>
    </div>
    <form class="card mt-3">
      <div class="card-body">
        <div class="card-title pb-3">
          <label for="searchQuery" class="form-label">
            Введите поисковый запрос
          </label>
          <input
            type="email"
            class="form-control"
            id="searchQuery"
            aria-describedby="searchQueryHelp"
          />
        </div>
        <div class="card-text font-monospace">Результат поиска:</div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
