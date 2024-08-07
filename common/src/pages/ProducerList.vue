<template>
  <v-app>
    <v-layout>
      <navigation title="P主列表"></navigation>
      <v-main scrollable>
        <v-container>
          <producer-info
            v-for="(producer, index) in producers"
            :key="index"
            :num="index + 1"
            :producer="producer">
          </producer-info>
        </v-container>
      </v-main>
      <fish-footer></fish-footer>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import ProducerInfo from "@/components/user/ProducerInfo.vue";
import Navigation from "@/components/layout/FishNavigation.vue";
import FishFooter from "@/components/layout/FishFooter.vue";

const producers = ref([
  {
    title: 'P主1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    img: 'https://imagedelivery.net/CRHKaup6UVEaPqVojXiGNg/b8b9f023-aeaa-4988-002e-7cacb61ae800/small',
    buttons: [
      {
        text: '查看详情',
        link: '/producer/1',
        color: 'red',
      },
      {
        text: '公示X',
        link: '/producer/2',
        color: 'blue',
      }
    ],
    tags: [
      {
        text: '标签1',
        color: 'red',
      }
    ],
  },
  {
    title: 'P主2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    img: 'https://imagedelivery.net/CRHKaup6UVEaPqVojXiGNg/b8b9f023-aeaa-4988-002e-7cacb61ae800/small',
    buttons: [
      {
        text: '查看详情',
        link: '/producer/1',
        color: 'red',
      },
      {
        text: '公示X',
        link: '/producer/2',
        color: 'blue',
      }
    ],
    tags: [
      {
        text: '标签1',
        color: 'red',
      }
    ],
  }
]);
</script>
