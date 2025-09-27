<script lang="ts">
    import imgSrc from '$lib/images/trip_dummy.png'

    export let trip;
    export let loading = true


    function convert_time(time: string){
        const date = new Date(time)
        
        const readable_time = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(date)

        return readable_time
    }

</script>

<a
    href="/"
    class="card preset-filled-surface-100-900 border-surface-200-800 card-hover block max-w-md overflow-hidden shadow-md rounded-xl"
>
    <!-- Header -->
    <header class="px-4 py-2 border-b border-surface-200-800">
        <h3 class="h3 text-left font-bold">{trip.broker}</h3>
    </header>

    <!-- Banner -->
    <img
        src={imgSrc}
        class="aspect-[21/9] w-full object-cover"
        alt="banner"
    />

    <!-- Content -->
    <div class="w-full grid grid-cols-2 gap-4 p-4">
        {#if loading}
            <!-- Loading placeholders -->
            <div class="card p-4 aspect-square preset-tonal-surface rounded-lg animate-pulse">
                <div class="h-6 w-3/4 bg-surface-300 rounded"></div>
                <div class="h-4 w-2/3 bg-surface-200 rounded mt-2"></div>
            </div>
            <div class="card p-4 aspect-square preset-tonal-surface rounded-lg animate-pulse">
                <div class="h-6 w-1/2 bg-surface-300 rounded"></div>
                <div class="h-4 w-1/3 bg-surface-200 rounded mt-2"></div>
            </div>
        {:else}
            <!-- From -->
            <div class="card p-4 preset-tonal-surface rounded-lg flex flex-col justify-between">
                <div>
                    <p class="text-xs uppercase tracking-wide text-surface-500">Pickup</p>
                    <p class="font-semibold">{trip.fromCompany}</p>
                    <p class="text-sm text-surface-600">{trip.pickup_location}</p>
                </div>
                <p class="mt-3 text-xs bg-surface-200 text-surface-800 px-1 py-1 rounded">
                    {convert_time(trip.pickup_date)}
                </p>
            </div>

            <!-- To -->
            <div class="card p-4 preset-tonal-surface rounded-lg flex flex-col justify-between">
                <div>
                    <p class="text-xs uppercase tracking-wide text-surface-500">Dropoff</p>
                    <p class="font-semibold">{trip.toCompany}</p>
                    <p class="text-sm text-surface-600">{trip.dropoff_location}</p>
                </div>
                <p class="mt-3 text-xs bg-surface-200 text-surface-800 px-1 py-1 rounded">
                    {convert_time(trip.delivery_date)}
                </p>
            </div>
        {/if}
    </div>

    <!-- Footer -->
    <footer class="flex items-center justify-between gap-4 p-4 border-t border-surface-200-800 text-sm">
        <span class="text-surface-600">🚚 320 miles</span>
        <button class="btn btn-sm btn-primary">View Details</button>
    </footer>
</a>
