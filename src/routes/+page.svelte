<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import TripCard from '$lib/Components/Home/TripCard.svelte';
	import DriverStates from '$lib/Components/Home/DriverStates.svelte';

	let name = "Jongwe Corner"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Mtl" />
</svelte:head>

<section>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>
</section>

<section>
	<TripCard {name}/>
</section>

<section class='my-2'>
	<DriverStates />
</section>


