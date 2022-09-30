<script lang="ts">
import type { Length } from "~/types/css"

export let leftMaxWidth: Length = "40vw"
export let rightMinWidthPercent = 40
export let noStretchHeight = false

$: classNames = ["two-column", noStretchHeight ? "no-stretch-height" : ""].join(
  " ",
)

$: styleVars = [
  `--left-max-w: ${leftMaxWidth}`,
  `--right-min-w: ${rightMinWidthPercent}%`,
].join(";")
</script>

<div class="{classNames}" style="{styleVars}">
  <slot name="left" class="two-column__left" />
  <slot name="right" class="two-column__right" />
</div>

<style lang="stylus">
space = 1rem
  
.two-column
  display: flex
  flex-wrap: wrap
  gap: space
  
  :global(> :first-child)
    flex-basis: var(--left-max-w)
    flex-grow: 1
  
  :global(> :last-child)
    flex-basis: 0
    flex-grow: 999
    min-width: var(--right-min-w)
  
  &.no-stretch-height
    align-items: flex-start
</style>
