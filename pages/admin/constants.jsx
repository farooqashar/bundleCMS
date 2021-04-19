const allPublishers = [
  { name: "McGraw Hill Education", id: 2027 },
  { name: "Pearson", id: 2028 },
  { name: "Memorang", id: 2029 },
  { name: "Kaplan", id: 2030 },
  { name: "Princeton Review", id: 2031 }
];

const allBundles = [
  { name: "USMLE Step 1 Flashcards", id: 3027 },
  { name: "USMLE Step 2 Flashcards", id: 3028 },
  { name: "Internal Medicine Shelf Flashcards", id: 3029 },
  { name: "Surgery PreTest Shelf Review", id: 3030 },
  { name: "Neurology PreTest Shelf Review", id: 3031 }
];

const idToBundles = {
  3027: {title: "USMLE Step 1 Flashcards"}, 
  3028: {title: "USMLE Step 2 Flashcards"},
  3029 : {title: "Internal Medicine Shelf Flashcards"},
  3030 : {title: "Surgery PreTest Shelf Review"}, 
  3031 : {title: "Neurology PreTest Shelf Review"},
};

const idToPublishers = {
  2027: {title: "McGraw Hill Education"}, 
  2028: {title: "Pearson"},
  2029 : {title: "Memorang"},
  2030 : {title: "Kaplan"}, 
  2031 : {title: "Princeton Review"},
};

const publisherBreadcrumbs = [
  {
    path: "/admin",
    name: "Admin page"
  },
  {
    path: "/admin/publishers",
    name: "Publishers"
  }
];

const bundleBreadcrumbs = [
  {
    path: "/admin",
    name: "Admin page"
  },
  {
    path: "/admin/bundles",
    name: "Bundles"
  }
];

const nextBundles = [
  { name: "USMLE Step 2 CK" },
  { name: "NBME Neurology Shelf" }
];

const features = [
  { name: "15,000+ flashcards" },
  { name: "Covers First Aid & Pathoma" },
  { name: "Mobile apps with real-time sync" }
];

const studyContent = [
  { name: "USMLE Step 1 - Musculoskeletal" },
  { name: "Skin, and Connective Tissue" },
  { name: "USMLE Step 1 - Reproductive" }
];

const testimonials = [
  {
    name:
      "The content is definitely solid. but the program itself is a game changer"
  },
  {
    name:
      "If I had known about this product I never would have purchased firecracker"
  }
];

const categories = [
  { name: "Pre-Medical" },
  { name: "Medical" },
  { name: "Popular Exams" }
];

const initialPublisherValues = {
  name: "Current Publisher Name",
  website: "google.com",
  description: "This is the current description of this publisher."
};

const newPublisherValues = {
  name: "",
  website: "",
  description: ""
};

const initialBundleValues = {
  name: "Current Bundle Name",
  publisher: "Current Publisher Name",
  examName: "Cur Exam Name",
  categories: "Cur Categories",
  nextBundles: "Cur next bundles",
  description: "Current description that is stored for this bundle",
  tagline: "Cur tagline",
  features: "Cur features",
  studyContent: "Cur studycontent",
  testimonials: "Cur testimonials"
};

const newBundleValues = {
  name: "",
  publisher: "",
  examName: "",
  categories: "",
  nextBundles: "",
  description: "",
  tagline: "",
  features: "",
  studyContent: "",
  testimonials: ""
};

const initialPlanValues = {
  planDuration: 8,
  price: 19.99
};

const dashBoardTitle = "Dashboard";

const AdminPageTitle = "Admin";

const MainPublishers = "Publishers";

const MainBundles = "Bundles";

const ManagePublisherTitle = "Manage Publisher";

const BundleOptionsTitle = "Bundle Options";

const ManageBundleInfoTitle = "Manage Bundle Info ";

const ManageBundlePlansTitle = "Manage Bundle Plans ";


const interval = [{ name: "Week" }, { name: "Month" }];
const currency = [{ name: "USD" }, { name: "RUP" }];

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
  idToPublishers
};
