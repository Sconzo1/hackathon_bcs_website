import React, {memo} from "react";
import PropTypes from "prop-types";
import {Switch} from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import News from "./news/News";
import NewsDetails from "./news/NewsDetails";


const Routing = ({newsPosts, selectNews, selectHome, refFooter}) => {
    return (
        <Switch>
            {newsPosts.map(post => (
                <PropsRoute
                    path={post.url}
                    component={NewsDetails}
                    title={post.title}
                    key={post.title}
                    importImage={post.importImage}
                    date={post.date}
                    content={post.content}
                    otherArticles={newsPosts.filter(newsPost => newsPost.id !== post.id)}
                />
            ))}
            <PropsRoute
                exact
                path="/news"
                component={News}
                selectNews={selectNews}
                newsPosts={newsPosts}
            />
            <PropsRoute path="/" component={Home} selectHome={selectHome}
                        refFooter={refFooter}/>)
        </Switch>
    );
}

Routing.propTypes = {
    newsPosts: PropTypes.arrayOf(PropTypes.object),
    selectHome: PropTypes.func.isRequired,
    selectNews: PropTypes.func.isRequired,
    refFooter: PropTypes.object.isRequired
};

export default memo(Routing);
