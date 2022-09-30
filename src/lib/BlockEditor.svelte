<script lang="ts">
import FloatLabelInput from "@/lib/FloatLabelInput.svelte"
</script>

<div class="block-editor">
  <FloatLabelInput id="test" label="test" />
</div>

<style>
.block-editor {
  background-image: linear-gradient(
    -225deg,
    #5d9fff 0%,
    #b8dcff 48%,
    #6bbbff 100%
  );
  padding: 2rem;
  margin: 1rem;
  border-radius: 1rem;
}
</style>
