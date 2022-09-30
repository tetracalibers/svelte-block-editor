<script lang="ts">
import VisuallyHidden from "@/lib/VisuallyHidden.svelte"

export let id: string
export let label: string
</script>

<div class="floating">
  <input
    id="{id}"
    placeholder="{label}"
    type="{$$restProps.type ?? 'text'}"
    class="floating__input"
    {...$$restProps}
  />
  <label for="{id}" data-label="{label}" class="floating__label">
    <VisuallyHidden>{label}</VisuallyHidden>
  </label>
</div>

<style>
.floating {
  --color: #4d608b;
  --bg-color: rgba(255, 255, 255, 0.25);
  --float-color: #8c1bab;
  --border-color: #ce9ffc;
  --border-radius: 10px;

  background-color: var(--bg-color);
  backdrop-filter: blur(4px);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 1;
}

.floating__input {
  background-color: var(--bg-color);
  backdrop-filter: blur(4px);
  border-radius: var(--border-radius);
  border: none;
  display: block;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  outline: none;
  padding: 1.8rem 1rem 0.6rem;
  caret-color: var(--color);
}

/* 表示状態を検知するために透明にして残しておく */
.floating__input::placeholder {
  color: rgba(255, 255, 255, 0);
}

.floating__label {
  display: block;
  position: relative;
  max-height: 0;
  pointer-events: none;
}

.floating__label::before {
  color: var(--color);
  content: attr(data-label);
  display: inline-block;
  filter: blur(0);
  backface-visibility: hidden;
  transform-origin: left top;
  transition: transform 0.2s ease;
  left: 1rem;
  position: relative;
}

.floating__input:placeholder-shown + .floating__label::before {
  transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
}

.floating__label::before,
.floating__input:focus + .floating__label::before {
  transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
}

/* focus時と入力済みの場合 */
.floating__input:focus + .floating__label::before,
.floating__input:not(:placeholder-shown) + .floating__label::before {
  color: var(--float-color);
}
</style>
