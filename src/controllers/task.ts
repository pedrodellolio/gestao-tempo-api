import express, { Request, Response } from "express";
import pool from "../db";

const router = express.Router();
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retorna todas as tarefas agendadas
 *     description: Retorna todas as tarefas agendadas
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const query = "SELECT * FROM formulario";

    // Executa a consulta no banco de dados usando uma promessa
    const [results] = await pool.query(query);

    // Retorna os resultados da consulta como resposta
    res.status(200).json(results);
  } catch (error) {
    console.error("Erro na rota /api/tasks:", error);
    res.status(500).send("Erro na rota /api/tasks");
  }
});

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Cria uma nova tarefa
 *     responses:
 *       201:
 *         description: Successful response
 */
router.post("/", async (req, res) => {
  try {
    const { title, date, start, end, backgroundColor } = req.body;
    const query =
      "INSERT INTO formulario (nome, data, hora_inicio, hora_fim, cor) VALUES (?, ?, ?, ?, ?)";
    const values = [title, date, start, end, backgroundColor];

    const [result] = await pool.query(query, values);

    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).send("Error creating task");
  }
});
export default router;
