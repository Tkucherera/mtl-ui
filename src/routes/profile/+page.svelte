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

  let editOpen = false;
  let profile = {
    name: "John Doe",
    phone: "(555) 123-4567",
    email: "driver@example.com",
    photo: "https://ui-avatars.com/api/?name=John+Doe&background=random",
    trips: 120,
    miles: "85,000"
  };

   let openSettings: boolean = false;
   let openLegal: boolean = false;
   let openNotifications: boolean = false;
   let openHelp: boolean = false;
   let openPrivacy: boolean = false;

  function saveProfile(data) {
    profile = { ...profile, ...data };
  }
</script>

<section>
<ProfileCardNav
  name={profile.name}
  phone={profile.phone}
  onEdit={() => (editOpen = true)}
/>

<Profile
  open={editOpen}
  name={profile.name}
  phone={profile.phone}
  email={profile.email}
  photo={profile.photo}
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




