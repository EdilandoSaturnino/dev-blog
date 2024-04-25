import { useState } from "react";
import { Header } from "../../components/Header";
import { postsData } from "../../data";
import { Post } from "./components/Post";

export function Home() {
  const [search, setSearch] = useState("");
  const [filteredPostsData, setFilteredPostsData] = useState(postsData);

  function handleSearch(value: any) {
    setSearch(value);
    const filtered = postsData.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredPostsData(filtered);
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="mx-auto max-w-screen-2lg px-6">
        {filteredPostsData.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        ).length > 0 ? (
          filteredPostsData.map((post, index) => <Post {...post} key={index} />)
        ) : (
          <p className="text-dark-50 text-xl text-center my-6">Sem posts ;/</p>
        )}
      </main>
    </>
  );
}
