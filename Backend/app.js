//module imports

import express from 'express';

//const express = require("express");
const app = express();
const bp = require("body-parser");
const request = require("request");

//sets up port 

const port = 5000;
app.listen(port, () => console.log("Server at 5000"));
