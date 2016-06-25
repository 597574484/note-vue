import Vue from 'vue';
import Store from './vuex/store.js';
import App from './components/App.vue';

new Vue({
	el : 'body',
	store : Store,
	components : {App}
});