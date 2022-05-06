import "../styles/globals.css";
import "../Assets/CSS/bootstrap.min.css";
import "../Assets/CSS/style.css";
import "../Assets/CSS/typography.css";
import "../Assets/CSS/responsive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
