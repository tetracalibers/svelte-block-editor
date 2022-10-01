<script lang="ts">
import Decrementer from "./Decrementer.svelte"
import Incrementer from "./Incrementer.svelte"
import NumInput from "./NumInput.svelte"
</script>

<div class="stepper">
  <Incrementer />
  <NumInput />
  <Decrementer />
</div>

<style lang="stylus">
.stepper
  --gap: 0.5rem
  --icon-size: 2rem
  --icon-color: cadetblue
  display: flex
  align-items: center
</style>
