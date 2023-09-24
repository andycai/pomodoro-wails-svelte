<script lang="ts">
  import Palette from "../icons/palette.svelte"
  import { action } from "../store/store"
  import OperationButton from "./operation-button.svelte"
  import RefreshButton from "./refresh-button.svelte"

  function changeTheme() {
    action.changeTheme()
  }
</script>

<div class="flex flex-row items-end mt-2 px-1">
  <button class="flex flex-row justify-start text-sm basis-1/4" title="Change Theme" on:click={changeTheme}>
    <Palette />
  </button>
  <OperationButton />
  <RefreshButton />
</div>