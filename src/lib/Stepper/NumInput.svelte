<script lang="ts">
import { count } from "./store"
</script>

<input type="number" id="number" label="number" bind:value="{$count}" />
