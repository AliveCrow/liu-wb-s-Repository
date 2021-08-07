/**
 * @name: log
 * @author: grit
 * @date: 2021/8/6 10:57
 * @description：log
 * @update: 2021/8/6 10:57
 * @FilePath: src/utils
 */

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | info ]
 */
function typeColor (type = 'default') {
    let color = ''
    switch (type) {
        case 'primary':
            color = '#2d8cf0'
            break
        case 'success':
            color = '#19be6b'
            break
        case 'info':
            color = '#909399'
            break
        case 'warning':
            color = '#ff9900'
            break
        case 'danger':
            color = '#f03f14'
            break
        case 'default':
            color = '#35495E'
            break
        default:
            color = type
            break
    }
    return color
}

const log = {} // 定义一个对象

/**
 * 打印方法
 * @param text 输出文本
 * @param type 输出样式，可以是6个状态值，也可以是自定义颜色
 * @param back 是否将色值应用于背景色
 */
log.print = function (text, type = 'default', back = false) {
    if (typeof text === 'object') { // 如果是对象则调用打印对象方式
        console.dir(text)
        return
    }
    if (back) { // 如果是打印带背景图的
        console.log(
            `%c ${text} `,
            `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`
        )
    } else {
        console.log(
            `%c ${text} `,
            `color: ${typeColor(type)};`
        )
    }
}

/**
 * 漂亮的输出
 * @param title 前面的标题
 * @param text 输出文本
 * @param type 输出样式，可以是6个状态值，也可以是自定义颜色
 */
log.pretty = function (title, text, type = 'primary') {
    console.log(
        `%c ${title} %c ${text} %c`,
        `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
        `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
        'background:transparent'
    )
}
log.primary = function (text, back = false) {
    this.print(text, 'primary', back)
}
log.success = function (text, back = false) {
    this.print(text, 'success', back)
}
log.info = function (text, back = false) {
    this.print(text, 'info', back)
}
log.warning = function (text, back = false) {
    this.print(text, 'warning', back)
}
log.danger = function (text, back = false) {
    this.print(text, 'danger', back)
}

export default log

// eg:
// log.pretty('=======便捷输出彩色背景文字======')
// log.pretty('title','this is primary')
// log.pretty('title','this is default','default')
// log.pretty('title','this is success','success')
// log.pretty('title','this is info','info')
// log.pretty('title','this is warning','warning')
// log.pretty('title','this is danger','danger')
// log.pretty('title','this is custom','#df85ff')

// ----------------------------------------
// log.print('=======便捷输出彩色文字======')
// log.primary('this is primary')
// log.success('this is success')
// log.info('this is info')
// log.warning('this is warning')
// log.danger('this is danger')
// ----------------------------------------
// log.print('=======便捷输出彩色背景文字======')
// log.primary('this is primary back',true)
// log.success('this is success back',true)
// log.info('this is info back',true)
// log.warning('this is warning back',true)
// log.danger('this is danger back',true)


