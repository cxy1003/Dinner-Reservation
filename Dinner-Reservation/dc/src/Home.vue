<template>
    <div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="abc">
                <login></login>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="abc">
                123
            </mt-tab-item>
        </mt-tabbar>

        <!-- <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="abc">
                456
            </mt-tab-item>
        </mt-tabbar> -->
    </div>
</template>
<script>
import Login from "../src/views/Login.vue"
export default {
    data() {
        return {
            active:"login"
        }
    },
    components:{
        login:Login
    }
}
</script>
<style>

</style>
