<script lang="ts">
import IconButton from "@/a11y/IconButton.svelte"

import { count } from "./store"
</script>

<IconButton clickFn="{() => ($count = Number($count) - 1)}" label="decrement">
  -
</IconButton>
