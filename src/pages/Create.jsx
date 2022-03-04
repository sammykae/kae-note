import React, { useState } from "react";
import {
	Typography,
	Button,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [cat, setCat] = useState("Todo");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (title === "") {
			setTitleError(true);
			setTimeout(() => {
				setTitleError(false);
			}, 3000);
		}
		if (details === "") {
			setDetailsError(true);
			setTimeout(() => {
				setDetailsError(false);
			}, 3000);
		}
		if (title && details) {
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, details, cat }),
			}).then(navigate(-1));
		}
	};
	return (
		<div>
			<Typography
				variant="h5"
				component={"h5"}
				color="textSecondary"
				gutterBottom
			>
				Create A New Note
			</Typography>
			<form noValidate autoComplete="off" onSubmitCapture={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					sx={{
						marginTop: "20px",
						marginBottom: "20px",
						display: "block",
					}}
					id="title"
					label="Note Title"
					required
					fullWidth
					variant="outlined"
					error={titleError}
					helperText={titleError ? "Enter note title" : null}
				/>
				<TextField
					onChange={(e) => setDetails(e.target.value)}
					sx={{
						marginTop: "20px",
						marginBottom: "20px",
						display: "block",
					}}
					id="details"
					label="Note Details"
					variant="outlined"
					fullWidth
					required
					multiline
					rows={4}
					error={detailsError}
					helperText={detailsError ? "Enter note detail" : null}
				/>
				<FormControl
					sx={{
						marginTop: "20px",
						marginBottom: "20px",
						display: "block",
					}}
				>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup value={cat} onChange={(e) => setCat(e.target.value)}>
						<FormControlLabel value="Todo" control={<Radio />} label="Todo" />
						<FormControlLabel value="Money" control={<Radio />} label="Money" />
						<FormControlLabel
							value="Reminder"
							control={<Radio />}
							label="Reminder"
						/>
						<FormControlLabel
							value="Others"
							control={<Radio />}
							label="Others"
						/>
					</RadioGroup>
				</FormControl>
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					endIcon={<KeyboardArrowRightIcon />}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Create;
