import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoadersProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoadersProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
