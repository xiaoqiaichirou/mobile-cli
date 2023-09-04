import { showToast, showNotify } from 'vant';
import Loading from '../components/Loading/index.tsx'
import {createVNode, render} from "vue";
import type { VNode } from "vue";
import { createApp } from 'vue'

const mountNode: HTMLDivElement = document.createElement("div");
export default {
    // 消息提示
    msg(content: string) {
        showToast(content)
    },
    // 错误消息
    msgError(content: string) {
        showNotify({
            type: 'danger',
            message: content
        })
    },
    // 成功消息
    msgSuccess(content: string) {
        showNotify({
            type: 'success',
            message: content
        })
    },
    // 警告消息
    msgWarning(content: string) {
        showNotify({
            type: 'warning',
            message: content
        })
    },
    // 通知提示
    notify(content: string) {
        showNotify({
            type: 'primary',
            message: content
        })
    },
    // 打开loading
    loading(msg: string) {
        const props = { Message: msg }
        const app = createVNode<VNode>(Loading, props)

        document.body.appendChild(mountNode)
        render(app, mountNode)
    },
    // 关闭loading
    closeLoading() {
        document.body.removeChild(mountNode);
    }
}
