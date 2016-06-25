## 手动重写一个vue-vuex的demo。

>[原文链接](https://segmentfault.com/a/1190000005015164)


参考：
[vue文档] (http://cn.vuejs.org/guide/)
[vuex文档](http://vuex.vuejs.org/zh-cn/index.html)

###重点:

####事件流
```
1.用户在组件中的输入操作触发 action 调用；
2.Actions 通过分发 mutations 来修改 store 实例的状态；
3.Store 实例的状态变化反过来又通过 getters 被组件获知。
```

![vuex事件流]("./dataflow.jpg")


####API
```
    根容器中加入store，它的每个子组件都会和store连接。
    store是new Vuex.Store({state, mutations})
    state是状态对象，mutations是一个对象，内部封装了各种事件的响应函数
         (函数名大写表示对应事件,函数第一个参数是state) && Vue.use(Vuex)。
    mutations是由actions触发，actions是一系列第一参数是store的函数，
        可以store.dispatch('对应事件')，而再由mutations响应。
    子组建可以使用vuex属性选择使用传递自根组建的store中的属性。
    vuex属性 :  actions，es6引入actions的部分函数加入vuex中即可使用
                getters，类似计算属性，可以获得state中的属性参数为state
```


