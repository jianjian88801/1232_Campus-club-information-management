const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootnp4n3/",
            name: "springbootnp4n3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootnp4n3/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园社团信息管理"
        } 
    }
}
export default base
