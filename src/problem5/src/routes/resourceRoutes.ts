import { Router } from "express";
import { getRepository } from "typeorm";
import { Resource } from "../entity/Resource";

const router = Router();

// Create a resource
router.post("/", async (req, res) => {
  const resourceRepo = getRepository(Resource);
  const newResource = resourceRepo.create(req.body);
  await resourceRepo.save(newResource);
  res.status(201).json(newResource);
});

// List resources with basic filters
router.get("/", async (req, res) => {
  const resourceRepo = getRepository(Resource);
  const resources = await resourceRepo.find();
  res.json(resources);
});

// Get details of a resource
router.get("/:id", async (req, res) => {
  const resourceRepo = getRepository(Resource);
  const resource = await resourceRepo.findOneBy({ id: parseInt(req.params.id, 10) });  // Using findOneBy
  if (resource) {
    res.json(resource);
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

// Update resource details
router.put("/:id", async (req, res) => {
  const resourceRepo = getRepository(Resource);
  const resource = await resourceRepo.findOneBy({ id: parseInt(req.params.id, 10) });  // Using findOneBy
  if (resource) {
    resourceRepo.merge(resource, req.body);
    await resourceRepo.save(resource);
    res.json(resource);
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

// Delete a resource
router.delete("/:id", async (req, res) => {
  const resourceRepo = getRepository(Resource);
  const result = await resourceRepo.delete(parseInt(req.params.id, 10));  // Convert to number
  if (result.affected) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

export default router;
