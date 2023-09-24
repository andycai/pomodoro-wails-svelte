<script lang="ts">
  import { Status, WorkType } from "../config"
  import { action, status, workType } from "../store/store"
  import Refresh from "../icons/refresh.svelte"

</script>

<button class="flex flex-row justify-end text-sm basis-1/4" title="Reset" on:click={action.reset}>
{#if $status === Status.Pause || $workType === WorkType.Break}
  <Refresh width={16} height={16} />
{/if}
</button>