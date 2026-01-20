// components/PageHeader.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, backgroundImage }: PageHeaderProps) {
  const pathname = usePathname();
  
  // Get breadcrumb items based on current path
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(path => path);
    const breadcrumbs = [{ name: 'Home', path: '/' }];
    
    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: name,
        path: currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const defaultBgImage = '/assets/images/backgrounds/page-header-bg-1-1.jpg';
  const bgImage = backgroundImage || defaultBgImage;

  return (
    <section className="page-header">
      <div 
        className="page-header__bg" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      <div className="container">
        <div className="page-header__content">
          <h2 className="page-header__title">{title}</h2>
          <ul className="easilon-breadcrumb list-unstyled">
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {index < breadcrumbs.length - 1 ? (
                  <Link href={crumb.path}>{crumb.name}</Link>
                ) : (
                  <span>{crumb.name}</span>
                )}
                {index < breadcrumbs.length - 1 && <span className="breadcrumb-separator"></span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="page-header__border-box">
        <div className="page-header__border page-header__border--1"></div>
        <div className="page-header__border page-header__border--2"></div>
        <div className="page-header__border page-header__border--3"></div>
        <div className="page-header__border page-header__border--4"></div>
        <div className="page-header__border page-header__border--5"></div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Page Header Styles */
    
      `}</style>
    </section>
  );
}