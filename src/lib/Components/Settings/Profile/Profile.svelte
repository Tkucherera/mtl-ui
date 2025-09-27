<script lang="ts">
    import X from '@lucide/svelte/icons/x'


  export let open = false;
  export let fname = "";
  export let lname = ""
  export let phone = "";
  export let email = "";
  export let photo =
    `https://ui-avatars.com/api/?name=${fname}+${lname}&background=random`;

  export let onClose: () => void;
  export let onSave: (data: {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    photo: string;
  }) => void;

  let form = { fname, lname, phone, email, photo };

  function save() {
    onSave(form);
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

<!-- Slide-over -->
<div
  class="fixed top-0 right-0 h-full w-full bg-surface-100-900 shadow-xl p-6 transform transition-transform duration-300"
  class:translate-x-0={open}
  class:translate-x-full={!open}
>
<header class="flex items-center justify-between mb-4 relative">
  <!-- Left spacer -->
  <div class="w-6"></div>

  <!-- Centered title -->
  <h3 class="h3 text-center absolute left-1/2 transform -translate-x-1/2">
    Profile
  </h3>

  <!-- Close button -->
  <button class="btn btn-sm btn-ghost" on:click={onClose}><X/></button>
</header>

  <div class="flex flex-col gap-4">
    <!-- Profile picture -->
    <div class="flex flex-col items-center gap-2">
      <img src={form.photo} alt="Profile" class="w-24 h-24 rounded-full" />
       <button type="button" class="btn preset-outlined-primary-500 font-bold">Edit</button>
    </div>

    <!-- Name -->
    <div class="mb-6">
      <label class="label">
        <span class="label-text ml-4 font-bold">Fist Name</span>
        <input type="text" class="input input-filled w-full h-12 rounded-xl px-4 bg-gray-800"
            bind:value={form.fname}
        />
      </label> 
    </div>

    <div class="mb-6">
      <label class="label">
        <span class="label-text ml-4 font-bold">Last Name</span>
        <input type="text" class="input input-filled w-full h-12 rounded-xl px-4 bg-gray-800"
            bind:value={form.lname}
        />
      </label> 
    </div>

    <!-- Phone -->
    <div class="mb-6">
      <label class="label">
        <span class='label-text  ml-4 font-bold'>Phone</span>
        <input type="text" class="input input-filled w-full h-12 rounded-xl px-4 bg-gray-800"
            bind:value={form.phone}
        />
      </label>
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label class="label">
        <span class="label-text ml-4 font-bold">Email</span>
        <input type="email" class="input input-filled w-full h-12 rounded-xl px-4 bg-gray-800"
            bind:value={form.email}
        />
      </label>
    </div>
  </div>

  <footer class="mt-6 flex justify-center">
    <button class="btn btn-ghost font-bold " on:click={onClose}>Cancel</button>
    <button class="btn preset-outlined-primary-500 font-bold" on:click={save}>Save</button>
  </footer>
</div>
