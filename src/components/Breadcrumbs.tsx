import { FC } from 'react';

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;