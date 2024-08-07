<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  title: String,
})

function backToMain(){
  window.location.href = '/'
}
</script>

<template>
    <v-app-bar
      class="px-md-4"
      color="surface-variant"
    >
      <template #prepend>
        <v-img
          max-width="40"
          src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
          width="40"
          @click="backToMain"
        />
      </template>

      <v-app-bar-title>
        <v-breadcrumbs
          bg-color=""
          class="flex-grow-1 mx-n4"
          density="default"
        >
          <div class="flex-1-1 mx-auto text-subtitle-2">
            <v-container class="py-0" fluid>
              <v-breadcrumbs-item >
                创作连锁2024
              </v-breadcrumbs-item>
              <v-breadcrumbs-divider></v-breadcrumbs-divider>
              <v-breadcrumbs-item color="primary">
                {{title}}
              </v-breadcrumbs-item>
            </v-container>
          </div>
        </v-breadcrumbs>
      </v-app-bar-title>
    </v-app-bar>
</template>

<style scoped>

</style>
