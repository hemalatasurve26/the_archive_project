import React, { useState } from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  // const navigate = useNavigate;

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  //   input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // from
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://thearchive.onrender.com/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      // navigate("/");
      if (data?.success) {
        alert("Archive Created");
        // navigate("/my-blogs");
        window.location.replace("https://main--glowing-zuccutto-d526a2.netlify.app/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"40%"}
          border={1.5}
          borderRadius={3}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop={"30px"}
        >
          <Typography
            variant="h3"
            textAlign={"center"}
            fontWeight={"bold"}
            padding={3}
            color={"gray"}
          >
            Create A Archive
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin={"normal"}
            variant={"outlined"}
            required
          ></TextField>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin={"normal"}
            variant={"outlined"}
            required
          ></TextField>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin={"normal"}
            variant={"outlined"}
            required
          ></TextField>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateBlog;
