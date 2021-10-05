import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextButton from "../components/TextButton";
import TextCard from "../components/TextCard";
import { feed } from "../api/Api";

export default function Feed() {
  const [feeds, setFeeds] = React.useState("");

  React.useEffect(() => {
    if (!feeds) {
      feed().then((res) => setFeeds(res));
    }
  }, [feeds]);

  const responseData = Array.from(feeds);

  console.log(responseData.map);

  return (
    <div>
      <Head>
        <title>Articulate</title>
        <meta name="description" content="Feed da aplicação Articulate" />
        <link rel="icon" href="/newspaper2.svg" />
      </Head>

      <Header />

      <main>
        <TextButton />
        {responseData.map((data) => (
          <TextCard
            key={data.id}
            author={data.author.username}
            date={data.createdAt.replace(/(\d*)-(\d*)-(\d*).*/, "$3-$2-$1")}
            content={data.content}
            likes={data.likes}
            favs={data.loves}
          />
        ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
