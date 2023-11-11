import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
  PRIMARY ='primary',
  ERROR = 'error'
}

export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  size?: TextSize;
  theme?: ThemeText
  align?: TextAlign
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    size = TextSize.M,
    align = TextAlign.LEFT,
    theme = ThemeText.PRIMARY,
  } = props;

  const additional = [
    className,
    cls[theme],
    cls[align],
    cls[size],
  ];

  return (
    <div className={classNames(cls.Text, {}, additional)}>
      {title && (<p className={cls.title}>{title}</p>)}
      {text && (<p className={cls.text}>{text}</p>)}
    </div>
  );
});
