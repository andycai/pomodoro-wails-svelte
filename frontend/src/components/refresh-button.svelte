<script lang="ts">
  import RefreshCircle from "svelte-material-icons/RefreshCircle.svelte";
  import { Status, WorkType } from "../config";
  import { action, status, workType } from "../store/store";

  console.log("render refresh")
</script>

<button class="flex flex-row justify-end text-sm basis-1/4" title="Reset" on:click={action.reset}>
{#if $status === Status.Pause || $workType === WorkType.Break}
  <RefreshCircle />
{/if}
</button>