import {defineComponent, KeepAlive, ref} from "vue";
import { RouterView } from 'vue-router'
import { Tabbar, TabbarItem, ConfigProvider } from 'vant';
import {GlobalTheme} from "../enums/globalTheme";
import {TabBar} from "./types";

export default defineComponent({
    setup() {
        const active = ref('videoTeaching')

        const tabBarConfig:Array<TabBar> = [
            {
                label: '首页',
                name: 'home',
                icon: 'home-o'
            },
            {
                label: '个人中心',
                name: 'my',
                icon: 'user-o'
            }
        ]

        const handleChange = (tabName: string) => {
            active.value = tabName
        }
        return () => (
            <ConfigProvider class="container mx-auto" theme={GlobalTheme['LIGHT']}>
                <RouterView />
                <Tabbar modelValue={active.value} route fixed onChange={handleChange}>
                    {
                        tabBarConfig.map(item => {
                            return <TabbarItem name={item.name} icon={item.icon} to={{name: item.name}}>{item.label}</TabbarItem>
                        })
                    }
                </Tabbar>
            </ConfigProvider>
        )
    }
})
