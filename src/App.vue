<template>
  <div id="left-side">
    <img id="left-image" src="./assets/background.gif">
  </div>
  <div id="right-side">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <h1>right-side</h1>
  </div>

</template>

<style>
* {
	margin:0; padding:0; 		/*全要素のマージン・パディングをリセット*/
}

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  margin: 0;
}

#left-side {
  width: 30%;
  height: 100%;
  float: left;
  overflow: hidden;
}

#right-side {
  width: 70%;
  height: 100%;
  float: right;
  margin: 0;
  background-color: black;
}

#left-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>