import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        theme={ThemeButton.CLEAR}
        className={cls.copyBtn}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
