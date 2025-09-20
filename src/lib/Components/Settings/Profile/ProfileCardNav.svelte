


<script lang="ts">
  import IconUser from '@lucide/svelte/icons/user';
  import IconEdit from '@lucide/svelte/icons/edit';
  import IconChevronRight from '@lucide/svelte/icons/chevron-right';

  const navItems = [
    { icon: IconUser, label: 'View' },
  ];

   
   export let name = "John Doe";
   export let phone = "(555) 123-4567";
   //export let email = "driver@example.com";
   //export let trips = 120;
   //export let miles = "85,000";
   export let pic = `https://ui-avatars.com/api/?name=${name}&background=random`


   export let onEdit: () => void;
</script>

<div class="card p-4 w-full preset-filled-surface-100-900 max-w-sm mx-auto shadow-md rounded-xl">
  <!-- Profile Header -->
  <div class="flex items-center space-x-4 mb-4">
    <img src="{pic}" alt="Profile" class="w-16 h-16 rounded-full"/>
    <div>
      <h4 class="h4 font-semibold">{name}</h4>
      <p class="text-sm text-gray-500">{phone}</p>
    </div>
  </div>

  <!-- Divider -->
   <hr class="hr" />

  <!-- Navigation Items -->
  {#each navItems as item}
    <button class="flex items-center justify-between py-3 w-full cursor-pointer hover:bg-gray-100 rounded-md" on:click={onEdit}>
      <div class="flex items-center space-x-3">
        <svelte:component this={item.icon} class="w-6 h-6 text-white-800"/>
        <span class="text-white-800">{item.label}</span>
      </div>
      <IconChevronRight class="w-5 h-5 text-white-800"/>
    </button>
    <!-- Optional separator after each row except last -->
    {#if navItems[navItems.length - 1] !== item}
       <hr class="hr" />
    {/if}
  {/each}
</div>


