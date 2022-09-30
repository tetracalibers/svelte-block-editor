<script>
import RedoButton from "@/atoms/RedoButton.svelte"
import UndoButton from "@/atoms/UndoButton.svelte"
import HorizontalStack from "@/layout/HorizontalStack.svelte"
</script>

<HorizontalStack justify="space-evenly">
  <UndoButton />
  <RedoButton />
</HorizontalStack>
