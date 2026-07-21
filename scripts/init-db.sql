-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_memories_user_id ON memories(user_id);
CREATE INDEX IF NOT EXISTS idx_memories_memory_date ON memories(memory_date);

COMMIT;