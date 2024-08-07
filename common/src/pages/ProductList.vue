<template>
  <v-app>
    <v-layout>
      <navigation title="A"></navigation>
      <v-main scrollable>
        <v-container class="pa-md-12 pa-6" fluid>
          <v-row>
            <cd-info v-for="product in products" :key="product.title" :cd="product"></cd-info>
          </v-row>
        </v-container>
      </v-main>
      <c-footer></c-footer>
    </v-layout>
  </v-app>
</template>
<script>
</script>
<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import CFooter from "@/components/FishFooter.vue";
import CdInfo from "@/components/ProductInfo.vue";
const products = [
  {
    title: 'CD 1',
    subtitle: '某个P名',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 94,
    img: 'https://imagedelivery.net/CRHKaup6UVEaPqVojXiGNg/b8b9f023-aeaa-4988-002e-7cacb61ae800/small',
  },
  {
    title: 'CD 2',
    subtitle: '另一个P名',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 94,
    img: 'https://imagedelivery.net/CRHKaup6UVEaPqVojXiGNg/b8b9f023-aeaa-4988-002e-7cacb61ae800/small',
  },
]
</script>
