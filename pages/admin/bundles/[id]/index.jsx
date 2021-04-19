/* -----------------Child Components--------------- */
import BundlesOptions from "../../components/BundlesOptions.jsx";

/* -----------------Nextjs--------------- */
import { useRouter } from "next/router";

/* -----------------Utils--------------- */
import { getBundle, getBundleOptionsTitle } from "../../utils.jsx";


/* -----------------Page--------------- */
const Page = ({ id, title, optionsTitle}) => {

  return (
  <BundlesOptions optionsTitle = {optionsTitle} title={title} id={id}></BundlesOptions>)
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const bundle = getBundle(id);
  const { title } = bundle;
  const optionsTitle = getBundleOptionsTitle();
  return {
    props: {
      id, 
      title, 
      optionsTitle
    }
  };
}

export default Page;
