<script>
import { Link } from "svelte-routing";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const aId = urlParams.get('aId');
let image = {};
import { paintings } from "../store/store.js"; 

const unsubscribe = paintings.subscribe(value => {
  let images = value;
  image = images[aId-1];
});
</script>

<div class="image-detail">
  <h2>{image.title}</h2>

  <img src={image.image} alt={image.title} class="image" />

  <div class="description">
    {image.description}
  </div>
  <div class="info">
    Height: {image.height}<br>
    Width: {image.width}<br>
    Price: {image.price} €
  </div>
</div>

<style>

.image-detail {
  margin: 0 6rem;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  text-align: left !important;
}

.info {
  text-align: left !important;
}

.image {
  height: 15rem;
}

</style>


