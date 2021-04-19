/* -----------------Nextjs--------------- */
import Link from "next/link";

/* -----------------MaterialUI--------------- */
import { List, ListItem, ListItemText } from "@material-ui/core";

/* -----------------Component--------------- */
const ListTable = ({ data, baseURL }) => {
  return (
    <>
      <List>
        {data.map(({ id, name }) => (
          <Link href={`${baseURL}${id}`} key={id}>
            <ListItem button divider>
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  color: "secondary"
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default ListTable;
