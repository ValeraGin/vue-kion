<script setup lang="ts">
import { Ref, ref } from "vue";

const stringArray = ref([
  "angular",
  "react",
  "vue",
  "react",
  "vue",
  "angular",
  "vue",
  "angular",
  "ember",
  "angular",
]);

const result: Ref<string[]> = ref([]);

function handleClick(words: string[]): void {
  result.value = intersectArray(words);
}
function intersectArray(words: string[]): string[] {
  console.log("input intersectArray", words);
  return ["ffgf"];
}
</script>

<template>
  <div class="container py-5">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          ALGORITHM: Получить упорядоченный массив уникальных значений по
          количеству повторений.
        </h4>
        <div class="card-text">
          <ul>
            <li>Изначальный массив: <br />{{ stringArray }}</li>
            <li>
              Ожидаемый результат: <br />
              <span>[ "vue", "angular", "react", "ember" ]</span>
            </li>
            <li>Фактический результат: <br />{{ result }}</li>
          </ul>
          <button class="btn btn-primary" @click="handleClick(stringArray)">
            Check result
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
