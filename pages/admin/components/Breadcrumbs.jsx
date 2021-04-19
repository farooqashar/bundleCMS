/* -----------------MaterialUI--------------- */
import { Typography, Breadcrumbs } from "@material-ui/core";

/* -----------------Material Design--------------- */
import { ChevronRight } from "mdi-material-ui";

/* -----------------Nextjs--------------- */
import Link from "next/link";

/* -----------------Component--------------- */
const BreadCrumbsPage = ({ breadcrumbs }) => (
  <Breadcrumbs separator={<ChevronRight />} aria-label="breadcrumb">
    {breadcrumbs.map(({ path, name }, index) =>
      index + 1 < breadcrumbs.length ? (
        <Link color="inherit" href={path}>
          {name}
        </Link>
      ) : (
        <Typography>{name}</Typography>
      )
    )}
  </Breadcrumbs>
);

export default BreadCrumbsPage;