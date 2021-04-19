/* -----------------Child Components--------------- */
import BundleInfo from "../../components/BundleInfo.jsx";

/* -----------------Nextjs--------------- */
import { useRouter } from "next/router";

/* -----------------Utils--------------- */
import {
  getTestimonials,
  getStudyContent,
  getFeatures,
  getAllCategories,
  getAllPublishers,
  getAllBundles,
  getNextBundles,
  getBundleInfo, 
  getManageBundleInfoTitle, 
  getBundle
} from "../../utils.jsx";

/* -----------------Page--------------- */
const Page = ({
  nextBundles,
  features,
  studyContent,
  testimonials,
  categories,
  publishers,
  bundles, 
  optionsTitle, 
  title, 
  id
}) => {

  return (
    <BundleInfo
      nextBundles={nextBundles}
      features={features}
      studyContent={studyContent}
      testimonials={testimonials}
      categories={categories}
      publishers={publishers}
      id={id}
      bundles={bundles}
      prepopulated={getBundleInfo()}
      optionsTitle = {optionsTitle}
      title = {title}
    ></BundleInfo>
  );
};

export const getServerSideProps = async (context) => {

  const { id } = context.params;
  const bundle = getBundle(id);
  const { title } = bundle;

  const optionsTitle = getManageBundleInfoTitle();

  return {
    props: {
      nextBundles: getNextBundles(),
      features: getFeatures(),
      studyContent: getStudyContent(),
      testimonials: getTestimonials(),
      publishers: getAllPublishers(),
      categories: getAllCategories(),
      bundles: getAllBundles(), 
      optionsTitle, 
      title, 
      id
    }
  };
}

export default Page;
