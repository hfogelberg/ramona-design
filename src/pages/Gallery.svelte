<div class="gallery">
  <h2>Gallery</h2>

  <div class="images">
    {#each images as img}
      <Thumbnail image={img} />
    {/each}
  </div>
</div>

<script>
import { paintings } from "../store/store.js"; 
import Thumbnail from  "../components/Thumbnail.svelte";
let images;

const unsubscribe = paintings.subscribe(value => {
  images = value;
});
</script>

<style>
  .gallery {
    width: 100vw;
    height: 100%;
    padding: 2rem;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
	
  h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		text-align: center;
		margin-top: 1rem;
	}

 </style>