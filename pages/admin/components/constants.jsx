const allPublishers = [
  { name: 'McGraw Hill Education', id: 2027 },
  { name: 'Pearson', id: 2028 },
  { name: 'Memorang', id: 2029 },
  { name: 'Kaplan', id: 2030 },
  { name: 'Princeton Review', id: 2031 },
];

const allBundles = [
  { name: 'USMLE Step 1 Flashcards', id: 3027 },
  { name: 'USMLE Step 2 Flashcards', id: 3028 },
  { name: 'Internal Medicine Shelf Flashcards', id: 3029 },
  { name: 'Surgery PreTest Shelf Review', id: 3030 },
  { name: 'Neurology PreTest Shelf Review', id: 3031 },
];

const allPlans = [
  {
    duration: '3', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 19.99, id: 3027,
  },
  {
    duration: '5', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 39.99, id: 3028,
  },
  {
    duration: '4', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 29.99, id: 3029,
  },
  {
    duration: '9', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 59.99, id: 3030,
  },
  {
    duration: '2', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 15.99, id: 3031,
  },
];

const idToBundles = {
  3027: { title: 'USMLE Step 1 Flashcards' },
  3028: { title: 'USMLE Step 2 Flashcards' },
  3029: { title: 'Internal Medicine Shelf Flashcards' },
  3030: { title: 'Surgery PreTest Shelf Review' },
  3031: { title: 'Neurology PreTest Shelf Review' },
};

const idToPublishers = {
  2027: { title: 'McGraw Hill Education' },
  2028: { title: 'Pearson' },
  2029: { title: 'Memorang' },
  2030: { title: 'Kaplan' },
  2031: { title: 'Princeton Review' },
};

const idToPlans = {
  3027: {
    duration: '3', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 19.99,
  },
  3028: {
    duration: '5', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 39.99,
  },
  3029: {
    duration: '4', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 29.99,
  },
  3030: {
    duration: '9', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 59.99,
  },
  3031: {
    duration: '2', trialInterval: 'Days', trialDuration: 7, interval: 'Months', price: 15.99,
  },
};

const publisherBreadcrumbs = [
  {
    link: '/admin',
    title: 'Admin page',
  },
];

const newPublisherBreadcrumbs = [
  {
    link: '/admin',
    title: 'Admin page',
  },
  {
    link: '/admin/publishers',
    title: 'Publishers',
  },
];

const bundleBreadcrumbs = [
  {
    link: '/admin',
    title: 'Admin page',
  },
];

const nextBundles = [
  { name: 'USMLE Step 2 CK' },
  { name: 'NBME Neurology Shelf' },
];

const features = [
  { name: '15,000+ flashcards' },
  { name: 'Covers First Aid & Pathoma' },
  { name: 'Mobile apps with real-time sync' },
];

const studyContent = [
  { name: 'Master' },
];

const testimonials = [
  {
    name:
      'The content is definitely solid. but the program itself is a game changer',
  },
  {
    name:
      'If I had known about this product I never would have purchased firecracker',
  },
];

const categories = [
  { name: 'Pre-Medical' },
  { name: 'Medical' },
  { name: 'Popular Exams' },
];

const initialPublisherValues = {
  name: 'Current Publisher Name',
  website: 'Current Website',
  description: 'This is the current description of this publisher.',
};

const newPublisherValues = {
  name: '',
  website: '',
  description: '',
};

const initialBundleValues = {
  publisher: 'Current Publisher Name',
  examName: 'Current Exam Name',
  categories: 'Current Categories',
  nextBundles: 'Current next bundles',
  description: 'Current description that is stored for this bundle',
  tagline: 'Current tagline',
  features: 'Current features',
  studyContent: 'Current studycontent',
  testimonials: 'Current testimonials',
};

const newBundleValues = {
  name: '',
  publisher: '',
  examName: '',
  categories: '',
  nextBundles: '',
  description: '',
  tagline: '',
  features: '',
  studyContent: '',
  testimonials: '',
};

const initialPlanValues = {
  planDuration: 8,
  price: 19.99,
};

const dashBoardTitle = 'Dashboard';

const AdminPageTitle = 'Admin';

const MainPublishers = 'Publishers';

const MainBundles = 'Bundles';

const ManagePublisherTitle = 'Manage Publisher';

const BundleOptionsTitle = 'Bundle Options';

const ManageBundleInfoTitle = 'Manage Bundle Info ';

const ManageBundlePlansTitle = 'Manage Bundle Plans ';

const MainPlansTitle = 'Manage Plans';

const interval = [{ name: 'Week' }, { name: 'Month' }];
const currency = [{ name: 'USD' }, { name: 'RUP' }];

export {
  allPublishers,
  allBundles,
  publisherBreadcrumbs,
  bundleBreadcrumbs,
  nextBundles,
  features,
  studyContent,
  testimonials,
  categories,
  initialPublisherValues,
  initialBundleValues,
  interval,
  currency,
  initialPlanValues,
  newPublisherValues,
  newBundleValues,
  dashBoardTitle,
  AdminPageTitle,
  MainPublishers,
  MainBundles,
  ManagePublisherTitle,
  idToBundles,
  BundleOptionsTitle,
  ManageBundleInfoTitle,
  ManageBundlePlansTitle,
  idToPublishers,
  allPlans,
  MainPlansTitle,
  idToPlans,
  newPublisherBreadcrumbs,
};
