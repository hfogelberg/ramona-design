<script>
export let time;

import { Link } from "svelte-routing";
</script>

<div class="thumbnail">
  <Link to="/store/?mId={item.id}"> 
    <h3>{image.title}</h3>
    <img src={image.image} alt={image.title} />
  </Link>
</div>

<style>
.thumbnail {
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 20rem;
  margin: 1rem;
}

img {
  height: 15rem;
}
</style>