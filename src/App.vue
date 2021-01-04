<template>
  <div id="app">
    <span id="nav" :key="item.path" v-for="item in items">
        <router-link :to="item.path">
            {{item.name}}
        </router-link>
    </span>
    <router-view/>
  </div>
</template>

<script>
export default {
    created() {
        this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name
                , path: route.path
            })
        })
    }
    , data() {
        return {
            items: []
        }
    }
}
</script>
