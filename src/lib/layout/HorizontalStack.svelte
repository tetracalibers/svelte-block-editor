<script lang="ts">
import type * as CSS from "csstype"

export let justify: CSS.Property.JustifyContent = "center"
export let align: CSS.Property.AlignItems = "center"

$: className = ["h-stack"].join(" ")
$: styleVars = [`--justify: ${justify}`, `--align: ${align}`].join(";")
</script>

<div class="{className}" style="{styleVars}">
  <slot />
</div>

<style lang="stylus">
v-space = 1rem

.h-stack 
  display: flex
  flex-wrap: wrap
  gap: v-space
  justify-content: var(--justify)
  align-items: var(--align)
</style>
