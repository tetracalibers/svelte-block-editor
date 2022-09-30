<script lang="ts">
import FloatLabelInput from "./FloatLabelInput.svelte"
import VerticalStack from "./layout/VerticalStack.svelte"
</script>

<div class="block-editor">
  <VerticalStack>
    <FloatLabelInput id="test" label="test" />
  </VerticalStack>
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
  box-sizing: border-box;
  min-height: calc(100vh - 1rem * 2);
}
</style>
