import { env } from '$env/dynamic/private';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Scopes for Gmail API
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Load OAUth2 client
const oAuthClient = new google.auth.OAuth2(env.G_AUTH_CLIENT_ID, env.G_AUTH_CLIENT_SECRET, "http://localhost:5173")


const getAccessToken = null