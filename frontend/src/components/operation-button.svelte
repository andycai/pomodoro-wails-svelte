<script lang="ts">
  import PauseCircleOutline from "svelte-material-icons/PauseCircleOutline.svelte";
  import PlayCircleOutline from "svelte-material-icons/PlayCircleOutline.svelte";
  import { Status, INTERVAL } from "../config";
  import { action, status, timer } from "../store/store";
  import { onDestroy } from "svelte";
  import { playAudio, playEndAudio } from "../utils";

//   console.log("render Operaction")
	const unsubscribe = status.subscribe((newValue) => {
		timer.id !== null && clearInterval(timer.id)
		if (newValue === Status.Tick) {
			timer.id = setInterval(action.countdown, INTERVAL)
		}
		playAudio(newValue === Status.Tick)
		playEndAudio(newValue === Status.Idle)
	})

	onDestroy(() => {
		clearInterval(timer.id)
		timer.id = null
		unsubscribe()
	})

</script>

<button class="flex flex-row justify-center basis-1/2" title="Play or Pause" on:click={action.tick}>
{#if $status === Status.Tick}
	<PauseCircleOutline />
{:else}
	<PlayCircleOutline />
{/if}
</button>