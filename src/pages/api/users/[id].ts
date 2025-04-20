import type { NextApiRequest, NextApiResponse } from "next";
import { mockUsers } from "@/lib/mock-users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;
  const index = mockUsers.findIndex((u) => u.id === id);

  if (index === -1 && method !== "POST") {
    return res.status(404).json({ message: "User not found" });
  }

  switch (method) {
    case "GET":
      return res.status(200).json(mockUsers[index]);

    case "PATCH": {
      mockUsers[index] = { ...mockUsers[index], ...req.body };
      return res.status(200).json(mockUsers[index]);
    }

    case "DELETE": {
      const deleted = mockUsers[index];
      mockUsers.splice(index, 1);
      return res.status(200).json({ message: "Deleted", user: deleted });
    }

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
