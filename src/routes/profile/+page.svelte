<script lang="ts">
  import Profile from "$lib/Components/Settings/Profile/Profile.svelte";
  import ProfileCardNav from "$lib/Components/Settings/Profile/ProfileCardNav.svelte";
  

  import DriverStates from "$lib/Components/Home/DriverStates.svelte";
  import SettingsNav from "$lib/Components/Settings/SettingsNav.svelte";
  
  import AccountSettings from "$lib/Components/Settings/AccountSettings/AccountSettings.svelte";
  import Help from "$lib/Components/Settings/Help/Help.svelte";
  import Notifications from "$lib/Components/Settings/Notifications/Notifications.svelte";
  import Legal from "$lib/Components/Settings/Legal/Legal.svelte";
	import Privacy from "$lib/Components/Settings/Privacy/Privacy.svelte";

  let editOpen = $state(false);

  import type { PageProps } from './$types'

	let { data }: PageProps = $props();
	const user = data.user



   let openSettings: boolean = $state(false);
   let openLegal: boolean = $state(false);
   let openNotifications: boolean = $state(false);
   let openHelp: boolean = $state(false);
   let openPrivacy: boolean = $state(false);

  function saveProfile(data: any) {
    console.log(data);
  }
</script>

<section>
<ProfileCardNav
  name={user.profile.fname}
  phone={user.profile.phone}
  onEdit={() => (editOpen = true)}
/>

<Profile
  open={editOpen}
  fname={user.profile.fname}
  lname={user.profile.lname}
  phone={user.profile.phone}
  email={user.profile.email}
  photo={user.profile.photo}
  onClose={() => (editOpen = false)}
  onSave={saveProfile}
/>
</section>


<section class="m-2">
    <DriverStates />
</section>

<section>
    <SettingsNav 
        onSettings={() => (openSettings = true)}
        onLegal={() => (openLegal= true)}
        onNotifications={() => (openNotifications=true)}
        onHelp={() => (openHelp=true)}
        onEdit={() => (editOpen = true)}
        onPrivacy={() => (openPrivacy = true)}
    
    />

    <AccountSettings 
        open={openSettings}
        onClose={() => (openSettings=false)}
        onSave={saveProfile}
    />

    <Help
        open={openHelp}
        onClose={() => (openHelp=false)}
        onSave={saveProfile}
    />

    <Notifications
        open={openNotifications}
        onClose={() => (openNotifications=false)}
        onSave={saveProfile}
    />

    <Legal 
        open={openLegal}
        onClose={() => (openLegal=false)}
        onSave={saveProfile}
    />

    <Privacy 
      open={openPrivacy}
      onClose={() => (openPrivacy=false)}
      onSave={saveProfile}
    />


</section>




