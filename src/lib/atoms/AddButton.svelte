<script lang="ts">
import IconButton from "@/a11y/IconButton.svelte"

export let type: string
</script>

<div class="drip">
  <IconButton label="{`add ${type} block`}">
    <slot />
  </IconButton>
</div>

<style>
:global(.drip > button) {
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0px;
  appearance: none;
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: rgb(4, 93, 233);
  background-image: linear-gradient(
    315deg,
    rgb(4, 93, 233) 0%,
    rgb(9, 198, 249) 74%
  );
  transition: all 0.3s ease-out 0s;
  box-shadow: rgb(77 96 139 / 20%) 14px 0px 5px -10px inset,
    rgb(77 96 139 / 20%) 13px 0px 2px -10px inset,
    rgb(250 241 220 / 50%) 0px -3px 5px 0px inset,
    rgb(255 255 255 / 30%) 0px -20px 10px 1px inset,
    rgb(77 96 139 / 30%) -20px 10px 5px -20px inset,
    rgb(77 96 139 / 20%) -20px 15px 10px -20px inset,
    rgb(77 96 139 / 30%) 0px 20px 30px -5px inset, rgb(0 0 0 / 6%) 0px 2px 1px,
    rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px,
    rgb(0 0 0 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px;
}

:global(.drip > button:hover) {
  box-shadow: rgb(255 255 255 / 20%) 14px 0px 5px -10px inset,
    rgb(255 255 255 / 20%) 13px 0px 2px -10px inset,
    rgb(250 241 220 / 50%) 0px -3px 5px 0px inset,
    rgb(255 255 255 / 30%) 0px -20px 10px 1px inset,
    rgb(255 255 255 / 30%) -20px 10px 5px -20px inset,
    rgb(255 255 255 / 20%) -20px 15px 10px -20px inset,
    rgb(255 255 255 / 30%) 0px 20px 30px -5px inset,
    rgb(245 225 183 / 80%) 0px 2px 1px -1px;
}

:global(.drip > button svg) {
  --i-size: calc(var(--size) * 0.64);
  font-size: var(--i-size);
  width: var(--i-size);
  height: var(--i-size);
  color: #ffffff80;
  filter: drop-shadow(1px 1px 10px white);
  transform: translateZ(0);
  vertical-align: middle;
}
</style>
