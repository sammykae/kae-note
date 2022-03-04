import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";

import { DeleteOutlined } from "@mui/icons-material";
const NoteCard = ({ note, handleDelete }) => {
	const styles = {
		reminder: {
			borderLeft: "5px solid red",
		},
		todo: {
			borderLeft: "5px solid blue",
		},
		money: {
			borderLeft: "5px solid green",
		},
		others: {
			borderLeft: "5px solid coral",
		},
	};
	return (
		<div>
			<Card
				elevation={3}
				sx={
					note.category === "Reminder"
						? styles.reminder
						: note.category === "Money"
						? styles.money
						: note.category === "Todo"
						? styles.todo
						: note.category === "Others"
						? styles.others
						: null
				}
			>
				<CardHeader
					action={
						<IconButton aria-label="more" onClick={() => handleDelete(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color={"textSecondary"}>
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default NoteCard;
