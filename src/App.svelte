<script>
  import { Router, Link, Route } from "svelte-routing";
  import Index from "./pages/Index.svelte";
  import Information from "./pages/Information.svelte";
	import Gallery from "./pages/Gallery.svelte";
	import Shop from "./pages/Shop.svelte";
 
  export let url = "";
</script> 
 
<main>
	<Router url="{url}">
		<h1>Helena's Art</h1>
		<nav>
			<link >
			<Link to="gallery">Gallery | </Link>
			<Link to="shop">Shop | </Link>
			<Link to="information">Information</Link>
		</nav>
		<div>
			<!-- <Route path="blog/:id" component="{BlogPost}" /> -->
			<Route path="gallery" component="{Gallery}" />
			<Route path="shop" component="{Shop}" />
			<Route path="information" component="{Information}" />
			<Route path="/"><Index /></Route>
		</div>
	</Router>
	

</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
	}

	nav {
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		text-align: center;
		margin-top: 1rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>