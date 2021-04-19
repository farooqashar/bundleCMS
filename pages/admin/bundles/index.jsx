/* -----------------Child components--------------- */
import MainBundles from "../components/MainBundles";

/* -----------------Utils--------------- */
import { getAllBundles, getBundlesTitle } from "..//utils.jsx";

/* -----------------Page--------------- */
const Page = ({ bundles, title }) => {
  return <MainBundles title={title} bundles={bundles}></MainBundles>;
};

export const getServerSideProps = (context) => {
  const bundles = getAllBundles();
  const title = getBundlesTitle();
  return {
    props: {
      bundles,
      title
    }
  };
}

export default Page;
