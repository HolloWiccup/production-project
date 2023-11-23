import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView
}

export const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} />
            <Skeleton width={100} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={16} className={cls.title} />
          <Skeleton width={150} height={16} />
          <Skeleton width="100%" height={250} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={150} height={30} />
            <Skeleton width={150} height={16} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={125} height={16} />
          <Skeleton width={60} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  );
};
