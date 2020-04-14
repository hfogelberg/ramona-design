<script>
  let images;
  import { paintings } from "../store/store.js"; 
  import Thumbnail from  "../components/Thumbnail.svelte";
  import { Link } from "svelte-routing";

  const unsubscribe = paintings.subscribe(value => {
    images = value;
  });
</script>

<div class="gallery">
  <h2>Gallery</h2>

  <div class="images">
    {#each images as img}
      <Thumbnail image={img} />
    {/each}
  </div>
</div>

<style>
  .gallery {
    width: 100vw;
    height: 100%;
    /* padding: 2rem; */
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