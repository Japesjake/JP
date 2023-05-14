<script>
    import Cell from './Cell.svelte';
    export let y;
</script>

<div class="grid-container">
    <div class="grid-item"><Cell x = 0 y = {y}/></div>
    <div class="grid-item"><Cell x = 1 y = {y}/></div>
    <div class="grid-item"><Cell x = 2 y = {y}/></div>
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