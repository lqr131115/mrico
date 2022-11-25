<script setup >
// eslint-disable-next-line
defineProps({ msg: '' })

</script>

<template>
    <h1>{{ msg }}</h1>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the logo to learn more</p>
</template>

<style lang="scss" scoped>
.read-the-docs {
    color: #888;
}
</style>
