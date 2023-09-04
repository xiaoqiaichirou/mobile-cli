import type { App } from 'vue'

function useResize(el:HTMLElement, callback:Function) {
    let resize = new ResizeObserver((entries) => {
        console.log(entries[0].contentRect)
    })

    resize.observe(el)
}

/**
 * 自定义指令
 * @param app vue实例
 */
const install = (app:App) => {
    app.directive('resize', {
        mounted(el, binding) {
            useResize(el, binding.value)
        }
    })
}

useResize.install = install

export default useResize
