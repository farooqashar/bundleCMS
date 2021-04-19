/* -----------------Nextjs--------------- */
import { useRouter } from "next/router";

/* -----------------Child components--------------- */
import PublisherInfo from "..//components/PublisherInfo.jsx";

/* -----------------Utils--------------- */
import {
  getAllPublishers,
  getPublisherInfo,
  getManagePublisherTitle, 
  getPublisher
} from "..//utils.jsx";

/* -----------------Page--------------- */
const Page = ({publisherInfo, managePublishertitle, id, title }) => {

  return ( 
    <PublisherInfo
      prepopulated={publisherInfo}
      id={id}
      managePublishertitle={managePublishertitle}
      title = {title}
    ></PublisherInfo> 
    
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;  

  const publisher = getPublisher(id);
  const { title } = publisher;

  const publisherInfo = getPublisherInfo();
  const managePublishertitle = getManagePublisherTitle();

  return {
    props: {
      publisherInfo,
      managePublishertitle, 
      id, 
      title
    }
  };
}  

export default Page;
