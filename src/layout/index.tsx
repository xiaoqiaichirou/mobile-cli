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
                label: '题库',
                name: 'questionBank',
                icon: 'font-o'
            },
            {
                label: '视频教学',
                name: 'videoTeaching',
                icon: 'play-circle-o'
            },
            {
                label: '在线考试',
                name: 'examination',
                icon: 'newspaper-o'
            },
            {
                label: '个人中心',
                name: 'my',
                icon: 'user-o'
            }
        ]

        const handleChange = (tabName) => {
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
