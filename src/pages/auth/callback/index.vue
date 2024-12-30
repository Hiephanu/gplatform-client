<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const supabase = useSupabaseClient();

const handleOAuthCallback = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error during OAuth code exchange:', error.message);
        return;
      }
      
      console.log('session data',data)
      router.push('/');
    } catch (error) {
      console.error('Error during OAuth callback handling:', error);
    }
  } else {
    console.error('No code found in the URL');
  
  }
};

handleOAuthCallback();
</script>

<template>
  <div>Redirecting...</div>
</template>
