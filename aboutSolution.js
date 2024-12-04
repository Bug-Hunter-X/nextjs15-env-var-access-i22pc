```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const { myCustomVariable } = router.query;

  return (
    <div>
      <h1>About Page</h1>
      <h2>{myCustomVariable}</h2>
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about?myCustomVariable=MyValueFromIndex">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```