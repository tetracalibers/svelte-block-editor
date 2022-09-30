<script lang="ts">
import type { Length } from "~/types/css"

export let space: Length = "1rem"
export let recursive = false

$: classNames = ["v-stack", recursive ? "recursive" : ""].join(" ")
$: styleVars = [`--space: ${space}`].join("; ")
</script>

<div class="{classNames}" style="{styleVars}" {...$$restProps}>
  <slot />
</div>

<style lang="stylus">
.v-stack
  display: flex
  flex-direction: column
  justify-content: flex-start
  gap: var(--space)
  
  :global(> *)
    /* 既存の垂直marginを削除 */
    margin-top: 0
    margin-bottom: 0
  
  :global(&.recursive * > :not(:first-child))
    margin-top: var(--space)
</style>
