<template>
    <div>
        <LinkPreview url="https://www.google.com/" @click="handleClick" />
    </div>
    <div class="">thnis is text</div>
</template>
  
<script>
import LinkPreview from '@ashwamegh/vue-link-preview'

export default {
    components: {
        LinkPreview
    },
    methods: {
        handleClick(preview) {
            console.log('click', preview.domain, preview.title, preview.description, preview.img)
        }
    }
}
</script>
  