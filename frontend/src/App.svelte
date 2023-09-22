<script lang="ts">
  import { action, workType, theme } from './store/store'
  import { onMount } from 'svelte'
  import { DefaultWorkDuration, Keys, MagicNumber, Tasks, dataJsonURL, diAudioPaths, endAudioPaths } from './config'
  import { getIntDefault, initItem } from './store/local'
  import { addAudio, addEndAudio } from './utils'
  import { ClassContainer, TextColors } from './style'
  import Footbar from './components/footbar.svelte'
  import TimeCounter from './components/time-counter.svelte'
  import Appbar from './components/appbar.svelte'
  import data from './assets/resources/data.json'

  onMount(() => {
    action.initData(
      getIntDefault(Keys.today(), 0),
      getIntDefault(Keys.total(Tasks.default), 0),
      getIntDefault(Keys.defaultWorkDuration, DefaultWorkDuration)
    )

    initItem(Keys.defaultWorkDuration, data.defaultWorkDuration.toString())
    initItem(Keys.defaultBreakDuration, data.defaultBreakDuration.toString())

    for (const v of diAudioPaths) {
      const audio = new Audio('/src/assets/' + v)
      audio.loop = true
      addAudio(v, audio)
    }

    for (const v of endAudioPaths) {
      addEndAudio(v, new Audio('/src/assets/' + v))
    }
  })

  let mainStyle = ""
  $: {
    const arr = TextColors[$workType]??TextColors[1]
    const color = arr[$theme]??arr[0]
    mainStyle = ClassContainer + color 
  }
</script>

<div class="{mainStyle}">
  <Appbar />
  <TimeCounter />
  <Footbar />
</div>