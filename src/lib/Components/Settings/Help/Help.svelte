<script lang='ts'>

  export let open = false;
  export let onClose: () => void;

  import X from '@lucide/svelte/icons/x'

  export let onSave: (data: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  }) => void;


  function save() {
    //onSave();
    onClose();
  }
</script>

<!-- Overlay -->
<div
  class="fixed inset-0 bg-black/40 transition-opacity"
  class:opacity-100={open}
  class:opacity-0={!open}
  hidden={!open}
  role="button"
  tabindex="0"
  aria-label="Close profile overlay"
  on:click={onClose}
  on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onClose(); } }}
></div>


<div
  class="fixed top-0 right-0 h-full w-full bg-surface-100-900 shadow-xl p-6 transform transition-transform duration-300"
  class:translate-x-0={open}
  class:translate-x-full={!open}
>
<header class="flex items-center justify-between mb-4 relative">

  <!-- title -->
  <h3 class="h3 ">
    Help
  </h3>

  <!-- Close button -->
  <button class="btn btn-sm btn-ghost" on:click={onClose}><X/></button>
</header>

</div>