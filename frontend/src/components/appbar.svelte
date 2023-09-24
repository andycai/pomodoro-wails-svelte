<script lang="ts">
  import PomodoroCount from "./pomodoro-count.svelte"
  import { Quit } from "../../wailsjs/runtime/runtime.js"
  import Close from "../icons/close.svelte"

  //
</script>

<div class="flex flex-row justify-between pt-1 px-1 text-sm">
  <PomodoroCount />
  <button title="Close Window" class="flex flex-row justify-end space-x-1" on:click={() => Quit() }>
    <Close />
  </button>
</div>