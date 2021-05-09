import { FC } from 'react';
import Link from 'next/link';
import { Result, Button } from 'antd';

const NotFound: FC<{ title?: string; subTitle?: string; href?: string; buttonText?: string }> = ({
  title = '404',
  subTitle = 'Sorry, the page you visited does not exist.',
  href = '/',
  buttonText = 'Back Home',
}) => (
  <div className="min-h-tripla flex flex-col justify-center">
    <Result
      status="404"
      title={title}
      subTitle={subTitle}
      extra={
        <Link href={href}>
          <Button type="primary">{buttonText}</Button>
        </Link>
      }
    />
  </div>
);

export default NotFound;
