import { message } from "antd"

/**
 * 提示
 * @param {*} msg 提示内容
 * @param {*} type 类型 success error warning
 */
export  function tip(msg, type = "error") {
    message[type](msg)
}