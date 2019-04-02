<template>
    <div>
    <b-navbar toggleable="lg" class="navbars">
        <b-navbar-brand :to="{name:'home'}">Chibi's Website</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item :to="{ name:'about' } " active-class="active disabled">About</b-nav-item>
            <b-nav-item :to="{ name:'login' } " active-class="active disabled">Login</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>
<style scoped>
.navbars{
    background-color: rgba(46, 241, 255, 0.61);
}
</style>




