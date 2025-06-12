'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MenuItem = ({ label, href, children }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  
  const isActive = pathname === href;

  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="nav_item_content">
        <Link href={href}>
          <span className={`px-4 py-2 block  transition-colors ${isActive ? 'active font-bold' : ''}`}>
            {label}
          </span>
        </Link>
      </div>
      
      {children && isHovered && (
        <div className="acCareDrop absolute top-full left-0 bg-white shadow-lg border rounded-md p-4 min-w-120  z-50">
          <div className="flex gap-8 ">
            {children.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex-1">
                <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                  {section.heading}
                </h3>
                <ul className="space-y-2 text-black flex-wrap flex gap-2.5 ">
                  {section.submenu.map((item, itemIndex) => (
                    <li key={itemIndex} className='menuItemsAnchor '>
                      <Link 
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-amber-600  hover:underline block py-1 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default MenuItem;