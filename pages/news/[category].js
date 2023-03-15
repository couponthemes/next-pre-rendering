function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h3>Article List By Category: {category} </h3>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h4>
              {article.id} - {article.title}
            </h4>
            <p>Category: {article.category}</p>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log("Query: ", query);
  const category = params.category;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Prerendering News Articles for categoty ${category}`);

  return {
    props: {
      articles: data,
      category: category,
    },
  };
}
