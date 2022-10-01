<script lang="ts">
import FloatLabelInput from "@/molecules/FloatLabelInput.svelte"
import { count } from "./store"

let label = "number"

$: styleVars = [
  `--width: ${$count.toString().length}em`,
  `--min-width: ${label.length}em`,
].join("; ")
</script>

<div class="stepper__input" style="{styleVars}">
  <FloatLabelInput
    type="number"
    id="number"
    label="{label}"
    bind:value="{$count}"
  />
</div>

<style lang="stylus">
.stepper__input
  :global(*)
    text-align: center;
    box-sizing: border-box;
    min-width: 5em;
    width: var(--width);
    -moz-appearance: textfield
    
    &::-webkit-outer-spin-button
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
</style>
