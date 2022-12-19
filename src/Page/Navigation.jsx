import React,{useState} from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {BsPerson} from "react-icons/bs"
import {Link}  from "react-router-dom"
import LOGIN from './LOGIN'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, db, auth } from "../Server/Configer";
const Navigation = () => {
  const [nav,setNav]=useState(false);
  const eventHandler=()=>{
    setNav(!nav)
  }
  const [user] = useAuthState(auth);
  const navigation = [
    { name: 'የኔ Frame', href: '/', current: true },
    { name: 'Search', href: '/search', current: false },
    // { name: 'Projects', href: '/Dashbord', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'About', href: '/about', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className=' w-full first-letter:'>
    <Disclosure as="nav" className="bg-white shadow-md ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="የኔ Frame"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="የኔ Frame"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? ' hover:bg-gray-700 text-blue-800 hover:text-white' :'text-blue-800 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium' 
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                       <button>{item.name}</button> 
                        
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {user?<Link to='uplood' className=" px-4 text-blue-800 mr-8 hover:bg-gray-700 hover:text-white ',
                          'px-3 py-2 rounded-md text-sm font-medium"><button>Add Frame </button></Link>:''}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                {/* <LOGIN/> */}
                <Link to='signup' >SignUp</Link>
                </button>

                {/* Profile dropdown */}
               
              </div>
             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
             
  {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? ' hover:bg-gray-700 text-blue-800 hover:text-white' : 'text-blue-800 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                       <button>{item.name}</button> 
                        
                      </Link>
                    ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}

export default Navigation