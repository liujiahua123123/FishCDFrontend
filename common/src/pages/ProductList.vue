<template>
  <v-app>
    <v-layout>
      <navigation title="A"></navigation>
      <v-main scrollable>
        <v-container class="pa-md-12 pa-6" fluid>
          <v-row>
            <product-info v-for="product in products" :key="product.title" :product="product"></product-info>
          </v-row>
        </v-container>
      </v-main>
      <fish-footer></fish-footer>
    </v-layout>
  </v-app>
</template>
<script>
</script>
<script setup lang="ts">
import Navigation from "@/components/layout/FishNavigation.vue";
import FishFooter from "@/components/layout/FishFooter.vue";
import ProductInfo from "@/components/user/ProductInfo.vue";
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
