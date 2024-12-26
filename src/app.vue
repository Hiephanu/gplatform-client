<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  meta: [
    // Open Graph metadata
    { property: 'og:image', content: '/thumbnail.png' }, // Thumbnail image
    { property: 'og:image:width', content: '1200' }, // Recommended width
    { property: 'og:image:height', content: '630' }, // Recommended height
    { property: 'og:url', content: 'https://www.gdghanu.com/' }, // Page URL
    { property: 'og:type', content: 'website' }, // Type of content (e.g., website, article)

    // Twitter metadata (optional, as it may help with cross-platform sharing)
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/thumbnail.png' },

    // General image meta tag
    { name: 'image', content: '/thumbnail.png' }
  ]
});
</script>
