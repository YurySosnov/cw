<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/dictation">Dictation</router-link>
    </div>
    <div class="content"><router-view/></div>
  </div>
</template>

<style lang="less">
@main_font: Arial, Helvetica, sans-serief;

* {
    margin: 0;
    padding: 0;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
}

body {
    font-family: @main_font;
}

.content {
    padding: 50px;
}

</style>
