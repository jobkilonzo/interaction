<template>
    <h1>{{ storeCount.count }}</h1>
    <p>{{ storeCount.oldOrEven }}</p>

    <p>{{ storeCount.doubleCount }}</p>
    <button @click="storeCount.decreaseCount">Decrease</button>
    <button @click="storeCount.increaseCount">Increase</button>
</template>
<script setup>
import {counterStore} from '@/store/count'

const storeCount = counterStore()
</script>