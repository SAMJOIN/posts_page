import { useEffect, useState } from "react";
import { Post as PostType } from "./Types";
import Post from "./Post/Post";
import Paginator from "./Paginator/Paginator";



function App() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', { method: "GET" })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setPageCount(data.length / 10);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  const getPosts = (start: number): PostType[] => {
    return posts.slice(start, start + 10);
  }

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection:"column"}}>
      <Paginator currentPage={currentPage} onPageChange={onPageChange} pageCount={pageCount} />
      {getPosts(10 * (currentPage - 1)).map(post => <Post {...post} />)}
    </div>
  );
}

export default App;
