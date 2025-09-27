<script lang="ts">
	import welcome from '$lib/images/logo-mtl.png';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import TripCard from '$lib/Components/Home/TripCard.svelte';
	import DriverStates from '$lib/Components/Home/DriverStates.svelte';

	// data 
	import type { PageProps } from './$types'

	let { data }: PageProps = $props();
	const trip = data.trip 
	

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Mtl" />
</svelte:head>

<section class="mb-2">
		<span class="welcome">
			<picture class="welcome-image">
				<source srcset={welcome} type="image/png" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>

			<style>
				.welcome-image {
					display: block;
					width: 100%;
					aspect-ratio: 12 / 3;
					overflow: hidden;
				}
				.welcome-image img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					display: block;
				}
			</style>
		</span>
</section>

<section>
	<TripCard {trip} loading={false}/>
</section>

<section class='my-2'>
	<DriverStates />
</section>


