import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const Notes = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8000/notes").then((res) =>
			res.json().then((data) => setNotes(data))
		);
	}, []);

	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete")) {
			await fetch(`http://localhost:8000/notes/${id}`, {
				method: "DELETE",
			}).then((res) => {
				const newNote = notes.filter((note) => note.id !== id);
				setNotes(newNote);
			});
		}
	};
	return (
		// <Container>
		<Grid container spacing={3}>
			{notes.map((note) => (
				<Grid item key={note.id} xs={12} sm={12} md={6} lg={4}>
					<NoteCard note={note} handleDelete={handleDelete}></NoteCard>
				</Grid>
			))}
		</Grid>
		// </Container>
	);
};

export default Notes;
