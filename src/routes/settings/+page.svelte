<script lang="ts">
  import Profile from "$lib/Components/Settings/Profile.svelte";
  import ProfileCardNav
   from "$lib/Components/Settings/ProfileCardNav.svelte";
  let editOpen = false;
  let profile = {
    name: "John Doe",
    phone: "(555) 123-4567",
    email: "driver@example.com",
    photo: "https://ui-avatars.com/api/?name=John+Doe&background=random",
    trips: 120,
    miles: "85,000"
  };

  function saveProfile(data) {
    profile = { ...profile, ...data };
  }
</script>

<ProfileCardNav
  name={profile.name}
  phone={profile.phone}
  email={profile.email}
  trips={profile.trips}
  miles={profile.miles}
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
