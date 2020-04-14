<script>
import { Link } from "svelte-routing";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mId = urlParams.get('mId');
let item = {};
import { storeitems } from "../store/store.js"; 

const unsubscribe = storeitems.subscribe(value => {
  let items = value;
  item = items[mId-1];
});
</script>

<div class="item-detail">
  <h2>{item.title}</h2>

  <img src={item.image} alt={item.title} class="image" />

  <div class="description">
    {item.description}
  </div>
  <div class="info">
    Price: {item.price} €
  </div>
</div>

<style>

.item-detail {
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
  text-align: left;
}

.image {
  height: 15rem;
}

</style>