import express, { Router } from "express";
import { verifyToken } from "../utils/verifyUser";
import { create } from "../controllers/post.controller";

const router = new Router();

router.post('/create',verifyToken,create)
