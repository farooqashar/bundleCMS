/* -----------------Nextjs--------------- */
import { useRouter } from "next/router";

/* -----------------Child Components--------------- */
import BundlePlan from "../../components/BundlePlan.jsx";

/* -----------------Utils--------------- */
import {
  getAllBundles,
  getInterval,
  getCurrency,
  getPlanInfo, getBundle, getBundlePlansTitle
} from "../../utils.jsx";

/* -----------------Page--------------- */
const Page = ({ bundles, interval, currency, title, plansTitle, id}) => {

  return (
      <BundlePlan
        interval={interval}
        currency={currency}
        id={id}
        bundles={bundles}
        prepopulated={getPlanInfo()}
        title = {title}
        plansTitle = {plansTitle}
      ></BundlePlan>
  );
};

export const getServerSideProps = async (context) => {

  const { id } = context.params;
  const bundle = getBundle(id);
  const { title } = bundle;
  const plansTitle = getBundlePlansTitle();

  return {
    props: {
      interval: getInterval(),
      currency: getCurrency(),
      bundles: getAllBundles(), 
      title, 
      plansTitle, 
      id
    }
  };
}

export default Page;
