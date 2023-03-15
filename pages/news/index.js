function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h4>
              {article.id} - {article.title}
            </h4>
            <p>Category: {article.category}</p>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();
  console.log('Prerendering News Articles');

  return {
    props: {
      articles: data,
    },
  };
}
