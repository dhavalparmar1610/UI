import classNames from 'classnames';
import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onClick?: () => void;
  footer?: React.ReactNode;
  footerClassName?: string;
}

export const Card = ({
  description,
  title,
  titleClassName,
  className,
  Icon,
  iconClassName,
  descriptionClassName,
  footer,
  footerClassName,
  onClick,
}: CardProps) => {
  return (
    <div
      className={classNames(
        'h-40 w-full sm:w-80 p-5 bg-white rounded-2xl text-black transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {Icon && <Icon className={iconClassName} />}
      <h2 className={classNames('text-2xl', titleClassName)}>{title}</h2>
      <hr />
      <h6 className={classNames(descriptionClassName)}>{description}</h6>
      {footer && <div className={classNames('mt-4', footerClassName)}>{footer}</div>}
    </div>
  );
};
