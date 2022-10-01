<script lang="ts">
import IconButton from "@/a11y/IconButton.svelte"
import MdRemove from "svelte-icons/md/MdRemove.svelte"

import { count } from "./store"
</script>

<div class="stepper__button decrementer">
  <IconButton clickFn="{() => ($count = Number($count) - 1)}" label="decrement">
    <MdRemove />
  </IconButton>
</div>

<style>
.stepper__button :global(> button) {
  padding: 0;
  border: none;
  outline: none;
  color: #7d8188;
  box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
    inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
    inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
    inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
    inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
    inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
    inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
    0px 2px 1px -1px rgb(245 225 183 / 80%);
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 50%;
  box-sizing: border-box;
  text-align: center;
}

.stepper__button :global(> button[disabled]) {
  background: none;
  color: #b0bec5;
}

.stepper__button :global(> button svg) {
  width: var(--icon-size);
  height: var(--icon-size);
}

.decrementer :global(> button) {
  background-image: linear-gradient(
    135deg,
    rgba(42, 250, 223, 1) 10%,
    rgba(76, 131, 255, 1) 100%
  );
}
</style>
