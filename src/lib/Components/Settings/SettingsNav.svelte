


<script lang="ts">
  import IconUser from '@lucide/svelte/icons/user';
  import IconEdit from '@lucide/svelte/icons/edit';
  import IconChevronRight from '@lucide/svelte/icons/chevron-right';
  import Scale from '@lucide/svelte/icons/scale';
  import DoorClosed  from '@lucide/svelte/icons/door-closed';
  import  CircleQuestionMark  from '@lucide/svelte/icons/circle-question-mark';
  import Settings from '@lucide/svelte/icons/settings';
  import LockKeyhole  from '@lucide/svelte/icons/lock-keyhole';
  import Bell from '@lucide/svelte/icons/bell'

   export let onSettings: () => void;
   export let onLegal: () => void;
   export let onNotifications: () => void;
   export let onHelp: () => void;
   export let onEdit: () => void;
   export let onPrivacy: () => void;
  
  const navItems = [
    
    { icon: Settings, label: 'Account Settings', func: onSettings},
    { icon: CircleQuestionMark, label: 'Get Help', func: onHelp},
    { icon: Bell, label: 'Notifications', func: onNotifications},
    { icon: Scale, label: 'Legal', func: onLegal},
    { icon: IconUser, label: 'View profile', func:  onEdit},
    { icon: LockKeyhole, label: 'Privacy', func: onPrivacy}
    
  ];



</script>

<div class="card p-4 w-full preset-filled-surface-100-900 max-w-sm mx-auto shadow-md rounded-xl">
  <!-- Navigation Items -->
  {#each navItems as item}
    <button class="flex items-center justify-between py-3 w-full cursor-pointer hover:bg-gray-100 rounded-md" on:click={item.func}>
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

<div class="card p-4 mt-8 w-full preset-filled-surface-100-900 max-w-sm mx-auto shadow-md rounded-xl">
    <button class="flex items-center justify-between py-3 w-full cursor-pointer hover:bg-gray-100 rounded-md" on:click={onEdit}>
        <div class="flex items-center space-x-3">
            <DoorClosed />
            <span class="text-white-800">Log out</span>
        </div>
    </button>
</div>


