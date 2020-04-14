<script>
  import { Router, Link, Route } from "svelte-routing";
  import Index from "./pages/Index.svelte";
  import Information from "./pages/Information.svelte";
	import Gallery from "./pages/Gallery.svelte";
	import Shop from "./pages/Shop.svelte";
	import Artwork from "./pages/Artwork.svelte";
	import Shopitem from "./pages/ShopItem.svelte";

  export let url = "";
</script> 
 
<main>
	<Router url="{url}">
		<h1>
			<Link to="/">
				Helena's Art
			</Link>
		</h1>
		<nav>
			<link >
			<Link to="/"><img src="/images/home.svg" alt="home" /> |</Link>
			<Link to="gallery">Gallery | </Link>
			<Link to="shop">Shop | </Link>
			<Link to="information">Information</Link>
		</nav>
		<div>
			<Route path="artwork" component="{Artwork}" />
			<Route path="shopitem" component="{Shopitem}" />
			<Route path="gallery" component="{Gallery}" />
			<Route path="shop" component="{Shop}" />
			<Route path="information" component="{Information}" />
			<Route path="/"><Index /></Route>
		</div>
	</Router>
</main>

<style>
	html {
		background-color: #f9f4ee;
	}

	main {		max-width: 240px;
		background-color: #f9f4ee;
		height: 100%;
	}

	nav {
		text-align: center;
	}

	h1 {
		color: #34495e;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: -1rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>