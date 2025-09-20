<script lang="ts">
    export let stats = {
        totalTrips: 128,
        milesDriven: 45230,
        hoursDriven: 1280,
        earnings: 84200
    };
</script>

<div class="card preset-filled-surface-100-900 border-surface-200-800 block max-w-md overflow-hidden shadow-md rounded-xl">
    <!-- Header -->
    <header class="px-4 py-2 border-b border-surface-200-800">
        <h3 class="h3 font-bold text-left">Driver Summary</h3>
    </header>

    <!-- Content -->
    <div class="grid grid-cols-2 gap-4 p-4">
        <!-- Total Trips -->
        <div class="card preset-tonal-surface rounded-lg p-4 flex flex-col items-start justify-center">
            <p class="text-xs uppercase tracking-wide text-surface-500">Trips</p>
            <p class="text-2xl font-bold">{stats.totalTrips}</p>
        </div>

        <!-- Miles Driven -->
        <div class="card preset-tonal-surface rounded-lg p-4 flex flex-col items-start justify-center">
            <p class="text-xs uppercase tracking-wide text-surface-500">Miles</p>
            <p class="text-2xl font-bold">{stats.milesDriven.toLocaleString()}</p>
        </div>

        <!-- Hours Driven -->
        <div class="card preset-tonal-surface rounded-lg p-4 flex flex-col items-start justify-center">
            <p class="text-xs uppercase tracking-wide text-surface-500">Hours</p>
            <p class="text-2xl font-bold">{stats.hoursDriven.toLocaleString()}</p>
        </div>

        <!-- Earnings -->
        <div class="card preset-tonal-surface rounded-lg p-4 flex flex-col items-start justify-center">
            <p class="text-xs uppercase tracking-wide text-surface-500">Earnings</p>
            <p class="text-2xl font-bold text-green-600">${stats.earnings.toLocaleString()}</p>
        </div>
    </div>
</div>
