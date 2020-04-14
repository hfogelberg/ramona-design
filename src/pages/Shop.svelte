<div class="gallery">
  <h2>Gallery</h2>

  <div class="images">
    {#each items as i}
      <Merch item={i} />
    {/each}
  </div>
</div>

<script>
let items;
import { storeitems } from "../store/store.js"; 
import Merch from  "../components/Merch.svelte";
import { Link } from "svelte-routing";

const unsubscribe = storeitems.subscribe(value => {
  items = value;
});
</script>

<style>
  .gallery {
    width: 100vw;
    height: 100%;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

h2 {
		color: #34495e;
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 100;
		text-align: center;
		margin-top: 1rem;
    text-align: center;
    margin-bottom: -0.5rem;
	}

 </style>