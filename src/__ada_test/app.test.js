const request = require("supertest");
const server = require("../app.js");

describe("express jwt", () => {
  afterAll(() => {
    server.close();
  });
  test("express install is correct", () => {
    const express = require("express");
    expect(express).not.toBeUndefined();
  });
  test("jsonwebtoken install is correct", () => {
    const jsonwebtoken = require("jsonwebtoken");
    expect(jsonwebtoken).not.toBeUndefined();
  });
  test("dotenv install is correct", () => {
    const dotenv = require("dotenv");
    expect(dotenv).not.toBeUndefined();
  });
  test("server run correct", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
  });

  test("Correctly configured environment variables", () => {
    require("dotenv").config();

    const SECRET_KEY = process.env.SECRET_KEY;
    expect(SECRET_KEY).not.toBeUndefined();
  });

  test("auth route implementation is correct for not registered users", async () => {
    const response = await request(server)
      .post("/auth")
      .send({ email: "example@example.com" });
    expect(response.text).toContain("Invalid user name or password");
  });

  test("auth route implementation is correct for registered users", async () => {
    const response = await request(server)
      .post("/auth")
      .send({ email: "admin@example.com" });
    expect(response.text).toContain("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
  });
  test("protected route premium-clients for admin rol implementation is correct", async () => {
    const authResponse = await request(server)
      .post("/auth")
      .send({ email: "admin@example.com" });
    const token = JSON.parse(authResponse.text).token;
    const response = await request(server)
      .get("/premium-clients")
      .set("authorization", token);
    expect(response.text).toContain("premium-clients list");
  });
  test("protected route premium-clients for user rol implementation is correct", async () => {
    const authResponse = await request(server)
      .post("/auth")
      .send({ email: "user@example.com" });
    const token = JSON.parse(authResponse.text).token;
    const response = await request(server)
      .get("/premium-clients")
      .set("Authorization", token);
    expect(response.text).toContain("Access not allowed");
  });
  test("protected route medium-clients for user rol implementation is correct", async () => {
    const authResponse = await request(server)
      .post("/auth")
      .send({ email: "user@example.com" });
    const token = JSON.parse(authResponse.text).token;
    const response = await request(server)
      .get("/medium-clients")
      .set("Authorization", token);
    expect(response.text).toContain("medium-clients list");
  });
  test("protected route medium-clients for admin rol implementation is correct", async () => {
    const authResponse = await request(server)
      .post("/auth")
      .send({ email: "admin@example.com" });
    const token = JSON.parse(authResponse.text).token;
    const response = await request(server)
      .get("/medium-clients")
      .set("Authorization", token);
    expect(response.text).toContain("medium-clients list");
  });
});
