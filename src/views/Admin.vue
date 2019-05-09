<template>
  <div class="admin">
      <div>&nbsp;</div>
      <b-button-group class="w-75 mx-auto">
          <router-link to="/admin/article/write" class="btn btn-lg btn-success">Write Article</router-link>
          <router-link to="/admin/article/list" class="btn btn-lg btn-secondary">List Article</router-link>
          <!-- <router-link to="/admin/users/list" class="btn btn-lg btn-secondary">List User</router-link> -->
      </b-button-group>
      <div>
          <router-view/>
      </div>
  </div>
</template>

<script scoped>
export default {
  name: 'Admin',
  
}
</script>

