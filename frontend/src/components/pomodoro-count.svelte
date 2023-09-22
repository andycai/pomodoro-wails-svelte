<script lang="ts">
  import Music from "svelte-material-icons/Music.svelte";
  import MusicOff from "svelte-material-icons/MusicOff.svelte";
  import { today, total, status } from "../store/store";
  import { changeAudio, playAudio } from "../utils";
    import { Status } from "../config";

  console.log("render today count")

  let musicOff = false 

  function change() {
    if ($status === Status.Tick) {
      musicOff = !changeAudio()
      playAudio(!musicOff)
    }
  }

</script>

<button title="Change Audio or Mute" on:click={change}>
{#if musicOff }
  <MusicOff />
{:else}
  <Music />
{/if}
</button>
<span class="text-xs pt-0">{ $total }/{ $today }</span>