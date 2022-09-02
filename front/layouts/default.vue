

<template>
  <div class="bg-gray-50 wrapper layers flex flex-col">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
html {
  font-family: Inter, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.wrapper {
  background-image: url("/bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.layers {
  min-height: 100vh;
}
@media screen and (min-width: 568px) {
  .container {
    max-width: 568px;
    margin: auto;
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: auto;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 1024px;
    margin: auto;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    max-width: 1280px;
    margin: auto;
  }
}
p,
ul,
ol {
  margin-bottom: 10px;
}
</style>
