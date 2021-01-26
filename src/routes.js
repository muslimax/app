import Home from './views/Home'
import AllStaff from './views/AllStaff'
import Employee from './views/Employee'

export default [{
    path: '/',
    component: Home
  },
  {
    path: '/all',
    component: AllStaff,
    props: true
  },
  {
    path: '/employee/:id',
    component: Employee,
  }
]
