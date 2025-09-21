<script lang="ts">
  import FileText from '@lucide/svelte/icons/file-text';
  import Upload from '@lucide/svelte/icons/upload';
  import Wallet from '@lucide/svelte/icons/wallet';

  // Example stats
  let stats = {
    expenses: 24,
    reviews: 12,
    total: "$5,400"
  };

  let uploads = 8;
  let paystubs = 3;
</script>

<!-- Header -->
<header class="flex items-center mb-3">
  <h3 class="h2 text-black font-bold m-2">Files</h3>
</header>

<!-- Big Stats Card -->
<div class="card m-2 preset-filled-surface-100-900 border-surface-200-800 w-full max-w-lg mx-auto p-6 shadow-md rounded-xl mb-8">
  <h2 class="text-lg font-semibold mb-4">Overview</h2>
  <div class="grid grid-cols-3 gap-4 text-center">
    <div>
      <p class="text-2xl font-bold">{stats.expenses}</p>
      <p class="text-sm text-gray-500">Expenses</p>
    </div>
    <div>
      <p class="text-2xl font-bold">{stats.reviews}</p>
      <p class="text-sm text-gray-500">Reviews</p>
    </div>
    <div>
      <p class="text-2xl font-bold">{stats.total}</p>
      <p class="text-sm text-gray-500">Total</p>
    </div>
  </div>
</div>

<!-- Two Cards Row -->
<div class="grid m-2 grid-cols-2 gap-4 max-w-lg mx-auto">
  <!-- Expense Uploads -->
  <div class="card preset-filled-surface-100-900 border-surface-200-800 relative flex flex-col items-center justify-center p-6 shadow-md rounded-xl">
    <!-- Badge -->
    <div class="flex absolute top-2 right-2 items-center px-2 justify-center rounded-full bg-blue-500 text-center text-white shadow-lg">
        <span class="text-lg font-bold">
            {uploads}
        </span>
    </div>
    <!-- Icon -->
    <Upload class="w-10 h-10 text-primary mb-2"/>
    <!-- Label -->
    <p class="text-sm font-semibold">Expense Uploads</p>
  </div>

  <!-- Paystubs -->
  <div class="card preset-filled-surface-100-900 border-surface-200-800 relative flex flex-col items-center justify-center p-6 shadow-md rounded-xl">
    <!-- Badge -->
    <div class="flex absolute top-2 right-2 items-center px-2 justify-center rounded-full bg-blue-500 text-center text-white shadow-lg">
        <span class="text-lg font-bold">
            {paystubs}
        </span>
    </div>
    <!-- Icon -->
    <Wallet class="w-10 h-10 text-primary mb-2"/>
    <!-- Label -->
    <p class="text-sm font-semibold">Paystubs</p>
  </div>
</div>
