import React from "react";
import { graphql, PageProps } from "gatsby";

// Define a type for your GraphQL query response
interface ArticleQueryData {
  directus: {
    articles: {
      
        id: string;
        title: string;
      }[];
    };
  
}

const IndexPage: React.FC<PageProps<ArticleQueryData>> = ({ data }) => {
  const articles = data.directus.articles;
  console.log(">>>"+articles);
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    directus {
      articles {
         
          id
          title
        
      }
    }
  }
`;

export default IndexPage;
