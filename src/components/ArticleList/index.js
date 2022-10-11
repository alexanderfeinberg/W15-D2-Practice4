import { Route, Switch, NavLink } from "react-router-dom";
import { useEffect } from "react";
import SingleArticle from "../SingleArticle";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articleReducer";

const ArticleList = () => {
  let dispatch = useDispatch();
  let articles = useSelector((state) => {
    return state["articleState"]["entries"];
  });
  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);
  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map((info) => (
          <li key={info.id}>
            <NavLink to={`/article/${info.id}`}>{info.title}</NavLink>
          </li>
        ))}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
