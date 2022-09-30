<script lang="ts">
import VisuallyHidden from "./VisuallyHidden.svelte"

export let label: string
export let type: "reset" | "button" | "submit" = "button"
</script>

<button type="{type}" {...$$restProps}>
  <slot />
  <VisuallyHidden>{label}</VisuallyHidden>
</button>

<style lang="stylus">
button
  cursor: pointer
  appearance: none
</style>
