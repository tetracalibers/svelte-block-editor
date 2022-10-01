<script lang="ts">
import { count } from "./store"
</script>

<button on:click="{() => ($count = Number($count) + 1)}"> + </button>
