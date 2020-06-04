import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import News from '@/views/News'
import MessageItem from '@/views/MessageItem'
import NewsItem from '@/views/NewsItem'
export default new VueRouter({
    mode:'history',
    routes: [{
            path: '/home',
            component: Home,
            children: [{
                    path: '/home/message',
                    component: Message,
                    children: [{
                        path: '/home/message/info:msgId',
                        component: MessageItem,
                        props(route) {
                            return {
                                msgId: route.params.msgId,
                                msgContent: route.query.msgContent
                            }

                        },
                        name: 'msgInfo',
                    }]
                },
                {
                    path: '/home/news',
                    component: News,
                    children: [{
                        path: '/home/news/info:newsId',
                        component: NewsItem,
                        props(route){
                            return{
                                newsId:route.params.newsId,
                                newsContent:route.query.newsContent
                            }
                        },
                        name:'newsInfo'
                    }]

                },
                {
                    path:'/home',
                    redirect:'/home/message'
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})