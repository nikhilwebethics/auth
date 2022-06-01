import ResponsiveAppBar from "../Components/header";
import Authentication from "../Components/Authentication";
const About = () => {
  return (
    <>
      <Authentication>
        <ResponsiveAppBar />
        <h1>About Page</h1>
      </Authentication>
    </>
  );
};

// About.getLayout = (page) => <Authentication>{page}</Authentication>;
// About.getLayout = function getLayout(page) {
//   return <Authentication>{page}</Authentication>;
// };

export default About;
