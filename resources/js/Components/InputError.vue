<script setup>
defineProps(['message']);
</script>
        
<template>
    <div class="invalid-output" v-show="message">
        <div class="text-sm text-danger">
            {{ message }}
        </div>
    </div>
</template>

<style>
.invalid-output {
    display: block !important;
}
</style>