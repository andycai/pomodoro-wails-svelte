<script lang="ts">
  import { action } from "../store/store";
  import OperationButton from "./operation-button.svelte";
  import RefreshButton from "./refresh-button.svelte";
  import SelectColor from "svelte-material-icons/SelectColor.svelte";

  function changeTheme() {
    action.changeTheme()
  }
</script>

<div class="flex flex-row items-end mt-1 px-1 text-2xl">
  <button class="flex flex-row justify-start text-sm basis-1/4" title="Change Theme" on:click={changeTheme}>
    <SelectColor />
  </button>
  <OperationButton />
  <RefreshButton />
</div>