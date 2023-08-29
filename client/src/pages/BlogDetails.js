import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
// import { toast } from "react-hot-toast";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  // const navigate = useNavigate;
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  // get blog details

  const getAllBlogDetail = async () => {
    try {
      const { data } = await axios.get(`https://thearchive.onrender.com/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data.blog.title,
          description: data.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogDetail();
  }, [id]);

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
      const { data } = await axios.put(`https://thearchive.onrender.com/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      // navigate("/");
      if (data?.success) {
        alert("Archive Updated");
        // navigate("/my-blogs");
        window.location.replace("/my-blogs");
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
            Update A Archive
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
          <Button type="submit" color="warning" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};

export default BlogDetails;
