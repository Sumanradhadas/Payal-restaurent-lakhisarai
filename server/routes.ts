import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          message: validationError.message 
        });
      }

      const contactData = validationResult.data;
      const submission = await storage.createContactSubmission(contactData);

      res.status(201).json({
        message: "Contact form submitted successfully",
        submission: {
          id: submission.id,
          name: submission.name,
          createdAt: submission.createdAt,
        },
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to process contact form submission" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
