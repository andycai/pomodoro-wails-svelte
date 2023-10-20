<script lang="ts">
  import { today, total, status } from "../store/store"
  import { changeAudio, isMute, playAudio } from "../utils"
  import { Status } from "../config"
  import Volume from "../icons/volume.svelte"
  import VolumeMute from "../icons/volume-mute.svelte"

  let musicOff = false 

  function change() {
    if ($status === Status.Tick) {
      changeAudio()
      musicOff = isMute()
      playAudio(!musicOff)
    }
  }

</script>

<button title="Change Audio or Mute" on:click={change}>
{#if musicOff }
  <VolumeMute width={16} height={16} />
{:else}
  <Volume width={16} height={16} />
{/if}
</button>
<span class="text-xs pt-0">{ $total }/{ $today }</span>