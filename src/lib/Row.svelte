<script>
    import Cell from '/src/lib/Cell.svelte';
    export let x;
</script>

<div class="grid-container">
    <div class="grid-item"><Cell y = 0 x = {x}/></div>
    <div class="grid-item"><Cell y = 1 x = {x}/></div>
    <div class="grid-item"><Cell y = 2 x = {x}/></div>
</div>

<style>
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
    }
    .grid-item {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.8);
      font-size: 30px;
      text-align: center;
    }
    </style>