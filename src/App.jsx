import { useState } from 'react';
import { Post } from './Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Post autor="John Doe" count={count} />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default App
