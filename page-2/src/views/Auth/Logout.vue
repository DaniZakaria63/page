<template>
    <p>Waiting for a minute</p>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'Logout',
    methods:{
        ...mapActions(['LOGOUT'])
    },
    mounted(){
        this.LOGOUT();
        this.$router.push('/login');
    }
}
</script>