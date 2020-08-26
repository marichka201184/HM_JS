import Home from "@/components/Home";
import Contacts from "@/components/Contacts/Contacts";
import MyProjects from "@/components/MyProjects/MyProjects";
//import UserInfo from "@/components/User/UserInfo";
//import UserEdit from "@/components/User/UserEdit";


export const routes = [
  {
    path: '', component: Home, name: 'Home'
  },
  {
    path: '/Contacts', component: Contacts
   },

   {
    path: '/MyProjects', component: MyProjects
   },  
  {path: '*', component: Home}
]
