import ResponsiveAppBar from "../Components/header";
import Link from "next/link";

import React from "react";
import Authentication from "../Components/Authentication";

const Posts = (props) => {
  const Posts = props.posts;

  return (
    <Authentication>
      <div>
        <ResponsiveAppBar />
        <div style={{ padding: "10px 400px 71px 400px" }}>
          <h1 style={{ textAlign: "center" }}>Posts List</h1>
          {Posts.map((res, index) => (
            <Link href={`post/${res.id}`} key={index}>
              <div key={res.id} style={{ cursor: "pointer" }}>
                <h3>
                  <span style={{ color: "red" }}>Author:</span>
                  {res.uagb_author_info.display_name}
                </h3>
                <p>
                  <span style={{ color: "red" }}>Description:</span>
                  {res.uagb_excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Authentication>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&_embed"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // revalidate: 10,
  };
}
export default Posts;
