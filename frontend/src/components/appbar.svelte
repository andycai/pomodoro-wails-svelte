<script lang="ts">
  import PomodoroCount from "./pomodoro-count.svelte";
  import Close from "svelte-material-icons/CloseCircle.svelte";
  import { Quit } from "../../wailsjs/runtime/runtime.js";

  //
</script>

<div class="flex flex-row justify-between pt-1 px-1 text-sm">
  <PomodoroCount />
  <button title="Close Window" class="flex flex-row justify-end space-x-1" on:click={() => Quit() }>
    <Close />
  </button>
</div>