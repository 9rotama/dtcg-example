<script lang="ts">
  import { token } from './tokens';

  const tags = {
    succeed: {
      color: token('Color.Color.Primitive.Blue.900').hex,
      text: '成功'
    },
    fail: {
      color: token('Color.Color.Primitive.Red.900').hex,
      text: '失敗'
    }
  } as const;
</script>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">welcome to the DTCG example app</h1>
  <button class="bg-Primitive-Blue-900 rounded-8 text-Neutral-White text-16 p-4 font-700"
    >ラベル</button
  >
  <button
    disabled
    class="bg-Neutral-SolidGray-300 rounded-8 text-Neutral-SolidGray-50 text-16 p-4 font-700"
    >ラベル</button
  >
  <div class="mt-4">
    {#each Object.entries(tags) as [key, tag]}
      <span
        class="inline-block px-3 py-1 rounded-6 text-Neutral-White text-16 font-700 mr-2"
        style="background-color: {tag.color}">{tag.text}</span
      >
    {/each}
  </div>
</div>
