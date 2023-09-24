<script lang="ts">
  import { count } from "../store/store"
  import { convertMinuteString, convertSecondString } from "../utils"

</script>

<div class="flex flex-col items-center font-black" style="--wails-draggable:drag">
  <h1 class="text-7xl" style="--wails-draggable:drag">{ convertMinuteString($count) }</h1>
  <h4 class="text-7xl" style="--wails-draggable:drag">{ convertSecondString($count) }</h4>
</div>