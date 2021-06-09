// @flow

/* -----------------Globals--------------- */
import React, { useState, useEffect } from 'react';

/* -----------------MaterialUI--------------- */
import {
  List, ListItem, ListItemText, Box, ListItemIcon, ListItemSecondaryAction,
} from '@material-ui/core';
import ReorderIcon from '@material-ui/icons/Reorder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

/* -----------------React Beautiful DND--------------- */
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/* -----------------Types--------------- */
type Props = {
  data: [],
  label: string,
  mutable: boolean
}

/* -----------------Component--------------- */
const DataTable = (props: Props) => {
  const { data, label, mutable } = props;
  const [newValues, setNewValues] = useState(data);

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      newValues,
      result.source.index,
      result.destination.index,
    );

    setNewValues(items);
  };

  useEffect(() => {
    setNewValues(data);
  }, [data, label]);

  return (
    <>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="id">
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <List>
                {newValues.map(({ id, name }, index) => (
                  <Draggable key={id} draggableId={`${index}`} index={index}>

                    {(provided, snapshot) => (

                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        button
                        divider
                      >
                        <ListItemIcon>
                          <ReorderIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={name}
                          primaryTypographyProps={{
                            color: 'secondary',
                          }}
                        />
                        <ListItemSecondaryAction>
                          {mutable ? (
                            <>
                              <Tooltip title="Edit">
                                <ListItemIcon>
                                  <EditIcon />
                                </ListItemIcon>
                              </Tooltip>
                              <Tooltip title="Delete">
                                <ListItemIcon>
                                  <DeleteIcon />
                                </ListItemIcon>
                              </Tooltip>
                            </>
                          ) : (
                            <Tooltip title="Delete">
                              <ListItemIcon>
                                <DeleteIcon />
                              </ListItemIcon>
                            </Tooltip>
                          ) }

                        </ListItemSecondaryAction>

                      </ListItem>
                    )
                    }
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DataTable;
