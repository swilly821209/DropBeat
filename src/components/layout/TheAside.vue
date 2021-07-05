<template>
  <nav>
    <h1>
      <router-link to="/">Drop Beat</router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/Find">發現</router-link>
      </li>
      <li>
        <router-link to="/Charts">排行榜</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav{
  width: 300px;
  height: 100vh;
  background-color: #222222;
  position: fixed;
  top: 0
}
</style>
