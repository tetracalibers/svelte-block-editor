<script lang="ts">
import VisuallyHidden from "./VisuallyHidden.svelte"

export let label: string
export let type: "reset" | "button" | "submit" = "button"
</script>

<button type="{type}">
  <slot name="icon" aria-hidden="true" />
  <VisuallyHidden>{label}</VisuallyHidden>
</button>

<style lang="stylus">
button
  background-color: rgba(255, 255, 255, 0)
  border: none
  cursor: pointer
  outline: none
  padding: 0
  appearance: none
  font-size: 1rem
</style>
