/* -----------------Child components--------------- */
import MainPublishers from "..//components/MainPublishers.jsx";

/* -----------------Utils--------------- */
import { getAllPublishers, getPublishersTitle } from "..//utils.jsx";

/* -----------------Page--------------- */
const Page = ({ publishers, title }) => {
  return <MainPublishers title={title} publishers={publishers}></MainPublishers>;
};

export const getServerSideProps = async () => {
  const publishers = getAllPublishers();
  const title = getPublishersTitle();
  return {
    props: {
      publishers,
      title
    }
  };
} 

export default Page;
