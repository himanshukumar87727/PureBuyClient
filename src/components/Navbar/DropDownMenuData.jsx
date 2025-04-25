import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import {FaUtensils,FaShoppingBasket,FaStore,FaShoppingCart,FaPhoneAlt,FaQuestionCircle,FaWineBottle,FaIceCream,FaBreadSlice,
    FaLeaf,FaFish,FaDrumstickBite,FaAppleAlt,FaTruck,FaPercent,FaGift,FaUserCircle} from "react-icons/fa";

export default function DropDownMenuData() {
    const DROPMENU = [
        {
            name: 'Departments',
            icon: <FaStore className="text-blue-600" />,
            subMenu: [
                { href: '/fresh-produce', value: 'Fresh Produce', icon: <FaAppleAlt className="text-green-500" /> },
                { href: '/meat-seafood', value: 'Meat & Seafood', icon: <FaFish className="text-red-400" /> },
                { href: '/dairy-eggs', value: 'Dairy & Eggs', icon: <FaBreadSlice className="text-yellow-300" /> },
                { href: '/bakery', value: 'Bakery', icon: <FaBreadSlice className="text-amber-600" /> },
                { href: '/frozen-foods', value: 'Frozen Foods', icon: <FaIceCream className="text-blue-300" /> },
                { href: '/pantry', value: 'Pantry', icon: <FaShoppingBasket className="text-orange-400" /> },
                { href: '/beverages', value: 'Beverages', icon: <FaWineBottle className="text-purple-500" /> },
                { href: '/snacks', value: 'Snacks', icon: <FaLeaf className="text-lime-500" /> },
                { href: '/deli', value: 'Deli', icon: <FaDrumstickBite className="text-red-500" /> },
                { href: '/international-foods', value: 'International Foods', icon: <FaUtensils className="text-amber-500" /> },
            ]
        },
        {
            name: 'More ways to shop',
            icon: <FaShoppingCart className="text-blue-600" />,
            subMenu: [
                { href: '/weekly-specials', value: 'Weekly Specials', icon: <FaPercent className="text-red-500" /> },
                { href: '/meal-kits', value: 'Meal Kits', icon: <FaUtensils className="text-emerald-500" /> },
                { href: '/subscriptions', value: 'Subscriptions', icon: <FaGift className="text-pink-500" /> },
                { href: '/same-day-delivery', value: 'Same Day Delivery', icon: <FaTruck className="text-blue-500" /> },
                { href: '/curbside-pickup', value: 'Curbside Pickup', icon: <FaShoppingCart className="text-indigo-500" /> },
                { href: '/gift-cards', value: 'Gift Cards', icon: <FaGift className="text-purple-500" /> },
            ]
        },
        {
            name: 'Help & Account',
            icon: <FaQuestionCircle className="text-blue-600" />,
            subMenu: [
                { href: '/account', value: 'My Account', icon: <FaUserCircle className="text-blue-500" /> },
                { href: '/order-status', value: 'Order Status', icon: <FaShoppingCart className="text-green-500" /> },
                { href: '/delivery-info', value: 'Delivery Information', icon: <FaTruck className="text-amber-500" /> },
                { href: '/returns', value: 'Returns & Refunds', icon: <FaQuestionCircle className="text-red-500" /> },
                { href: '/contact', value: 'Contact Us', icon: <FaPhoneAlt className="text-blue-400" /> },
                { href: '/faq', value: 'FAQs', icon: <FaQuestionCircle className="text-indigo-500" /> },
            ]
        },
    ]

    return (
        <div className="absolute md:top-18 top-16 left-0 z-50 w-full lg:w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-blue-500 py-2 px-1">
            <div className="flex flex-col space-y-1">
                {DROPMENU.map((menu, index) => (
                    <Disclosure key={index} as="div" className="relative">
                        {({ open }) => (
                            <>
                                {/* Mobile view - Disclosure button */}
                                <div className="lg:hidden">
                                    <DisclosureButton className="flex items-center justify-between text-gray-800 hover:bg-blue-50/80 px-4 py-3 rounded-md text-left w-full group transition-colors duration-200">
                                        <span className="flex items-center gap-3 font-medium">
                                            <span className="text-lg">{menu.icon}</span>
                                            <span>{menu.name}</span>
                                        </span>
                                        <FiChevronRight className={`ml-2 transform transition-transform duration-200 ${open ? 'rotate-90' : ''}`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="px-4 py-2 transition-all duration-300 ease-in-out">
                                        <div className="flex flex-col space-y-1 pl-8 border-l-2 border-blue-100 ml-2">
                                            {menu.subMenu.map((item, subIndex) => (
                                                <a key={subIndex} href={item.href}
                                                    className="flex items-center gap-3 hover:bg-blue-50/50 rounded-md px-3 py-2.5 text-sm transition-colors duration-150"
                                                >
                                                    <span className="text-lg">{item.icon}</span>
                                                    <span>{item.value}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </div>

                                {/* Desktop view - Menu */}
                                <Menu as="div" className="hidden lg:block">
                                    {({ open }) => (
                                        <>
                                            <MenuButton className="flex items-center justify-between text-gray-800 hover:bg-blue-50/80 px-4 py-3 rounded-md text-left w-full group transition-colors duration-200">
                                                <span className="flex items-center gap-3 font-medium">
                                                    <span className="text-lg">{menu.icon}</span>
                                                    <span>{menu.name}</span>
                                                </span>
                                                <FiChevronRight className={`ml-2 transform transition-transform duration-200 ${open ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                            </MenuButton>
                                            <MenuItems
                                                anchor="right start"
                                                className="absolute left-full top-0 mt-0 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden border border-gray-100"
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <div className="p-1.5">
                                                    {menu.subMenu.map((item, subIndex) => (
                                                        <MenuItem key={subIndex}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={`${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors duration-150`}
                                                                >
                                                                    <span className="text-lg">{item.icon}</span>
                                                                    <span>{item.value}</span>
                                                                </a>
                                                            )}
                                                        </MenuItem>
                                                    ))}
                                                </div>
                                            </MenuItems>
                                        </>
                                    )}
                                </Menu>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
}