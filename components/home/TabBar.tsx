import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function TabBar() {

  const navigation = useRouter()

  const route = usePathname()
  const TabBarItem: {
    route: string,
    icon: string,
    activeIcon: string
  }[] = [
    {
      route: '/',
      icon:'home'
    },
    // {
    //   route: '/custom_role',
    //   icon: 'custom_role',

    // },
    {
      route: '/chat_list',
      icon: 'chat_list',

    },
    {
      route: '/me',
      icon: 'me',
      
    }
  ].map((item) => {
    return {
      ...item,
      icon: `/img/router/${item.icon}.png`,
      activeIcon: `/img/router/${item.icon}-active.png`
    }
  })


  return (
    <div className='w-full h-16 flex bg-bg justify-center items-center'>
 <div className='w-[85%] h-full flex justify-between items-center'>
       {TabBarItem.map((item, index) => {
        return (
          <div>
           {    item.route === route ? <Image
            src={item.activeIcon}
            alt=""
            width={30}
            height={30}
            key={index}
          ></Image> : <Image
            src={item.icon}
            alt=""
            width={30}
            height={30}
              key={index}
              onClick={() => {
                navigation.push(item.route)
                }
              }
          ></Image>}
       </div>
        )
      })}
 </div>
    </div>
  )
}
