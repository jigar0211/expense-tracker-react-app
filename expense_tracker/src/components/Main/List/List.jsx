import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyle from './style';
import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {
    const classes = useStyle();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

    // const transactions = [
    //     {id: 1, type: "Income", category: 'Salary', amount: 50, date: 'Sat-15' }, 
    //     {id: 2, type: "Expense", category: 'Pets', amount: 150, date: "Sat-15" }, 
    //     {id: 3, type: "Income", category: 'Car', amount: 50, date: "Sat-15" } 
    // ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}
export default List;