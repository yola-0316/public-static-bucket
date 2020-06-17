<script>
  import Header from "./Header.svelte";
  let name = "world";
</script>

<style>

</style>

<div class="container mx-auto">
  <Header/>
  <h1>Hello {name.toUpperCase()}!</h1>
</div>
