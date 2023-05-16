<template>
  <main id="home">
    <div class="content">
      <h1>belleglisse.com</h1>
      <p>Découvrez notre sélection de plus de <span>2530 produits</span> en stock.</p>
      <form>
        <input type="text" placeholder="Rechercher un article" />
        <button type="submit">Rechercher</button>
      </form>
    </div>
    <div class="annonces">
      <div class="cards">
        <div class="card" v-for="item in data" :key="item.id">
          <img :src="item.image" :alt="item.title" />
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p class="desc">{{ item.description }}</p>
            <p class="price">{{ item.price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import CatalogueService from "@/servives/CatalogueService";

const data = CatalogueService.getProducts();
</script>