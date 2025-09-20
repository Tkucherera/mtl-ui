<script lang="ts">
	import '../app.css';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	// Icons
	import IconFolder from '@lucide/svelte/icons/folder';
	import IconHouse from '@lucide/svelte/icons/house';
	import IconSettings from '@lucide/svelte/icons/cog';
	import IconTruck from '@lucide/svelte/icons/truck';
	import IconMessage from '@lucide/svelte/icons/message-circle';

	let value = 'home';
</script>

<div class="flex h-screen w-full flex-col">
	<!-- Main Content -->
	<main class="flex-1 p-2 overflow-y-auto pb-20">
		<slot />
	</main>

	<!-- Bottom Navigation (fixed) -->
	<Navigation.Bar
		{value}
		onValueChange={(v) => (value = v)}
		class="fixed bottom-0 left-0 w-full border-t border-surface-200 bg-surface-100 z-50"
	>
		<Navigation.Tile id="files" label="Files" href="/files"><IconFolder /></Navigation.Tile>
		<Navigation.Tile id="messages" label="Messages" href="/messages"><IconMessage /></Navigation.Tile>
		<Navigation.Tile id="home" label="Home" href="/"><IconHouse /></Navigation.Tile>
		<Navigation.Tile id="truck" label="Truck" href="/truck"><IconTruck/></Navigation.Tile>
		<Navigation.Tile id="settings" label="Settings" href="/settings"><IconSettings /></Navigation.Tile>
	</Navigation.Bar>
</div>
