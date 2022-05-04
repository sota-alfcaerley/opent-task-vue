<template>
  <!-- <b-button href="#">Button</b-button> -->
  {{ getFinishedCount }} | {{ getNotFinishedCount }}
  <b-button>button</b-button>
  <div v-for="(item, itemIdx) in getTaskItems" :key="itemIdx">
    <task-detail :taskItem="item"></task-detail>
  </div>
</template>
<script lang="ts" src="./logic.ts" />
