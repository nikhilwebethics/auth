import ResponsiveAppBar from "../Components/header";

const Singlepost = (props) => {
  const Data = props.post;

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: "10px 400px 71px 400px" }}>
        <h1>Single Post:</h1>
        <h2>
          <span style={{ color: "red" }}>slug:</span>
          {Data.slug}
        </h2>
        <h2>
          <span style={{ color: "red" }}>status:</span>
          {Data.status}
        </h2>
      </div>
    </>
  );
};

export async function getServerSideProps(params) {
  const id = params.query.id;
  const res = await fetch(
    `https://renemorozowich.com/wp-json/wp/v2/posts/${id}`
  );
  const post = await res.json();

  return { props: { post } };
}

export default Singlepost;

// const Singlepost = (props) => {
//   console.log(props.post, "ppppppppp");
//   return (
//     <div>
//       <h2>
//         <span style={{ color: "red" }}>slug</span>
//       </h2>
//       <h2>
//         <span style={{ color: "red" }}>status</span>
//       </h2>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const res = await fetch(
//     "https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&_embed"
//   );
//   const posts = await res.json();
//   console.log(posts, "eeeeee");
//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `https://renemorozowich.com/wp-json/wp/v2/posts/${params.id}`
//   );
//   const post = await res.json();
//   return { props: { post } };
// }

// export default Singlepost;
