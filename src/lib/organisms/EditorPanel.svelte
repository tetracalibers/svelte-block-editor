<script>
import VerticalStack from "@/layout/VerticalStack.svelte"
import EditorBlock from "@/molecules/EditorBlock.svelte"
</script>

<div class="panel">
  <VerticalStack>
    <EditorBlock />
  </VerticalStack>
</div>

<style lang="stylus">
.panel
  background-image: linear-gradient(
    -225deg,
    #5d9fff 0%,
    #b8dcff 48%,
    #6bbbff 100%
  )
  padding: 2rem
  border-radius: 1rem
</style>
