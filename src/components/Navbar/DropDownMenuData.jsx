import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaUtensils, FaShoppingBasket, FaStore, FaShoppingCart, FaLaptop, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

export default function DropDownMenuData() {
    const DROPMENU = [
        {
            name: 'Departments',
            icon: <FaStore className="mr-2" />,
            subMenu: [
                { href: '/food', value: 'Food', icon: <FaUtensils className="mr-2" /> },
                { href: '/pantry', value: 'Pantry', icon: <FaShoppingBasket className="mr-2" /> },
                { href: '/deli', value: 'Deli', icon: <FaStore className="mr-2" /> },
            ]
        },
        {
            name: 'More ways to shop',
            icon: <FaShoppingCart className="mr-2" />,
            subMenu: [
                { href: '/shoponlinedeal', value: 'Shop Online Deal', icon: <FaLaptop className="mr-2" /> },
                { href: '/electronics', value: 'Electronics', icon: <FaLaptop className="mr-2" /> },
            ]
        },
        {
            name: 'Help',
            icon: <FaQuestionCircle className="mr-2" />,
            subMenu: [
                { href: '/contact', value: 'Contact', icon: <FaPhoneAlt className="mr-2" /> },
                { href: '/help', value: 'Help', icon: <FaQuestionCircle className="mr-2" /> },
            ]
        },
    ]

    return (
        <div className="absolute top-20 left-0 z-50 w-full lg:w-64 bg-white shadow-lg rounded-b-md py-2 px-2">
            <div className="flex flex-col space-y-1">
                {DROPMENU.map((menu, index) => (
                    <Disclosure key={index} as="div" className="relative">
                        {({ open }) => (
                            <>
                                {/* Mobile view - Disclosure button */}
                                <div className="lg:hidden">
                                    <DisclosureButton className="flex items-center justify-between text-gray-800 hover:bg-blue-50 px-4 py-3 rounded-md text-left w-full group">
                                        <span className="flex items-center"> {menu.icon} {menu.name} </span>
                                        <FiChevronRight className={`ml-2 transform transition-transform ${open ? 'rotate-90' : ''}`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="px-4 py-2">
                                        <div className="flex flex-col space-y-2">
                                            {menu.subMenu.map((item, subIndex) => (
                                                <a key={subIndex} href={item.href}
                                                    className="flex items-center hover:bg-blue-50 rounded-md px-4 py-2"
                                                > {item.icon} {item.value}
                                                </a>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </div>

                                {/* Desktop view - Menu */}
                                <Menu as="div" className="hidden lg:block">
                                    <MenuButton className="flex items-center justify-between text-gray-800 hover:bg-blue-50 px-4 py-3 rounded-md text-left w-full group">
                                        <span className="flex items-center">
                                            {menu.icon}
                                            {menu.name}
                                        </span>
                                        <FiChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </MenuButton>
                                    <MenuItems
                                        anchor="right start"
                                        className="absolute left-full top-0 mt-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
                                    >
                                        <div className="p-2">
                                            {menu.subMenu.map((item, subIndex) => (
                                                <MenuItem key={subIndex}>
                                                    <a
                                                        href={item.href}
                                                        className="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-50"
                                                    >
                                                        {item.icon}
                                                        {item.value}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
}