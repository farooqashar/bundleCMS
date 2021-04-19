/* -----------------Constants--------------- */
import {
  categories,
  testimonials,
  allPublishers,
  allBundles,
  nextBundles,
  features,
  studyContent,
  initialPublisherValues,
  initialBundleValues,
  interval,
  currency,
  initialPlanValues,
  dashBoardTitle,
  AdminPageTitle,
  MainPublishers,
  MainBundles,
  ManagePublisherTitle, 
  idToBundles, 
  BundleOptionsTitle, 
  ManageBundleInfoTitle, 
  ManageBundlePlansTitle, 
  idToPublishers
} from "./constants.jsx";

const getAllPublishers = () => {
  return allPublishers;
};

const getBundle = (id) => {
  return idToBundles[id];
};

const getPublisher = (id) => {
  return idToPublishers[id];
};

const getBundleOptionsTitle = () => {
  return BundleOptionsTitle;
};

const getManageBundleInfoTitle = () => {
  return ManageBundleInfoTitle;
};

const getBundlePlansTitle = () => {
  return ManageBundlePlansTitle;
};

const getDashboardTitle = () => {
  return dashBoardTitle;
};

const getManagePublisherTitle = () => {
  return ManagePublisherTitle;
};

const getAdminPageTitle = () => {
  return AdminPageTitle;
};

const getPublishersTitle = () => {
  return MainPublishers;
};

const getBundlesTitle = () => {
  return MainBundles;
};

const getAllBundles = () => {
  return allBundles;
};

const getAllCategories = () => {
  return categories;
};

const getNextBundles = () => {
  return nextBundles;
};

const getFeatures = () => {
  return features;
};

const getStudyContent = () => {
  return studyContent;
};

const getTestimonials = () => {
  return testimonials;
};

const getPublisherInfo = () => {
  return initialPublisherValues;
};

const getBundleInfo = () => {
  return initialBundleValues;
};

const getInterval = () => {
  return interval;
};

const getCurrency = () => {
  return currency;
};

const getPlanInfo = () => {
  return initialPlanValues;
};

export {
  getTestimonials,
  getStudyContent,
  getFeatures,
  getAllCategories,
  getAllPublishers,
  getAllBundles,
  getNextBundles,
  getPublisherInfo,
  getBundleInfo,
  getInterval,
  getCurrency,
  getPlanInfo,
  getAdminPageTitle,
  getPublishersTitle,
  getDashboardTitle,
  getBundlesTitle,
  getManagePublisherTitle, 
  getBundle, 
  getManageBundleInfoTitle, 
  getBundleOptionsTitle, 
  getBundlePlansTitle, 
  getPublisher
};
