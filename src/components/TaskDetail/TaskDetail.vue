<template>
  <div>
    <b-card>
      <b-card-body>
        <b-card-text>
          {{ taskItem.no }}.
          {{ taskItem.title }}
          {{ taskItem.limit }}
          {{ taskItem.priority }}
          {{ taskItem.isFinished }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>
<script lang="ts" src="./logic.ts" />
