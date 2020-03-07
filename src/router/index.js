import Home from '../components/home'
import Category from '../components/category'
import Cart from '../components/cart'
import User from '../components/user'
import NotFound from '../components/notfound'
export const routes =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/404',
        component:NotFound
    }
]

// export const subRoutes =[
//     {
//         path:'/home/dashboard',
//         component:DashBoard,
//         roles:["admin","abc"]
//     },
//     {
//         path:'/home/list',
//         component:List,
//         roles:["admin","abc"]
//     },
//     {
//         path:'/home/notify',
//         component:Notify,
//         roles:["admin","abc"]
//     },
//     {
//         path:'/home/setting',
//         component:Setting,
//         roles:["admin"]
//     },
//     {
//         path:'/home/add',
//         component:Add,
//         roles:["admin"]
//     }
// ]