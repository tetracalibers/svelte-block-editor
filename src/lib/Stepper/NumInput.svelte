<script lang="ts">
import FloatLabelInput from "@/molecules/FloatLabelInput.svelte"

import { count } from "./store"
</script>

<FloatLabelInput
  type="number"
  id="number"
  label="number"
  bind:value="{$count}"
/>
