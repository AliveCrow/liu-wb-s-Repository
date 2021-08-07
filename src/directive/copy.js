import log from "../utils/log"

export default {
    // bind、inserted、update、componentUpdate和unbind。
    bind: (el) => {
        log.pretty('bind')
    },
    // 当被绑定的元素插入到 DOM 中时……
    inserted: (el) => {
        log.pretty('inserted')
            el.children[1].children[1].children[0].childNodes.forEach((i,index)=>{
                if(i.nodeName==="PRE"){
                    let dom = el.children[1].children[1].children[0].childNodes[index].children[0];
                    let icon = document.createElement("i");
                    icon.classList.add("el-icon-copy-document");
                    icon.style.position = "absolute";
                    icon.style.top = "10px";
                    icon.style.right = "10px";
                    icon.style.height = "50px";
                    icon.style.fontSize = "1.5rem";
                    dom.appendChild(icon);
                    console.log(dom)
                    icon.onmouseenter = () => {
                        icon.style.color = "#67c23a";
                    };
                    icon.onmouseleave = () => {
                        icon.style.color = "#eee";
                    };
                    icon.onclick = (e) => {
                        this.$copyText(e.target.previousElementSibling.textContent).then(
                            (e) => {
                                this.$message({
                                    type: "success",
                                    message: "复制成功",
                                    offset: getWindowScrollHeight(window.parent) + 20,
                                });
                            },
                            (e) => {
                                this.$message({
                                    type: "error",
                                    message: "无法复制",
                                    offset: getWindowScrollHeight(window.parent) + 20,
                                });
                            }
                        );
                    };
                }
            })
    },

    update: (el) => {
        log.pretty('update')

    },
    componentUpdated: (el) => {
        log.pretty('componentUpdated')


    },
    unbind: () => {
        log.pretty('unbind')

    }

};
