# DATABASE_SCHEMA.md

## Purpose

This document defines the database architecture for RepliCons.

The database serves as the foundation for:

* Memory storage
* Personality analysis
* Behavioral pattern detection
* Timeline reconstruction
* Semantic memory search
* Future Soul Computing research

---

# Database Platform

## Primary Database

PostgreSQL

Reasons:

* ACID compliant
* Reliable
* Mature ecosystem
* Excellent indexing
* Supports pgvector

---

## Extensions

### pgvector

Purpose:

Store and search AI-generated embeddings.

Used for:

* Semantic memory search
* Memory similarity detection
* Context retrieval
* Relationship discovery

---

# Core Tables

## users

Stores authentication data.

| Field         | Type      |
| ------------- | --------- |
| id            | UUID      |
| email         | VARCHAR   |
| password_hash | TEXT      |
| role          | VARCHAR   |
| created_at    | TIMESTAMP |
| updated_at    | TIMESTAMP |

---

## profiles

Stores user profile information.

| Field        | Type    |
| ------------ | ------- |
| id           | UUID    |
| user_id      | UUID    |
| display_name | VARCHAR |
| avatar_url   | TEXT    |
| bio          | TEXT    |

---

## memories

Stores memory records.

| Field               | Type      |
| ------------------- | --------- |
| id                  | UUID      |
| user_id             | UUID      |
| title               | VARCHAR   |
| description         | TEXT      |
| memory_date         | DATE      |
| emotion             | VARCHAR   |
| emotional_intensity | INTEGER   |
| created_at          | TIMESTAMP |

---

## memory_tags

Stores memory tags.

Examples:

* family
* school
* travel
* career
* relationship

| Field     | Type    |
| --------- | ------- |
| id        | UUID    |
| memory_id | UUID    |
| tag_name  | VARCHAR |

---

## memory_relationships

Connects related memories.

Examples:

* caused_by
* related_to
* follows
* contradicts

| Field             | Type    |
| ----------------- | ------- |
| id                | UUID    |
| source_memory_id  | UUID    |
| target_memory_id  | UUID    |
| relationship_type | VARCHAR |

---

## timeline_events

Stores timeline representations.

| Field      | Type |
| ---------- | ---- |
| id         | UUID |
| user_id    | UUID |
| memory_id  | UUID |
| event_date | DATE |

---

## personality_traits

Big Five personality tracking.

| Field             | Type      |
| ----------------- | --------- |
| id                | UUID      |
| user_id           | UUID      |
| openness          | FLOAT     |
| conscientiousness | FLOAT     |
| extroversion      | FLOAT     |
| agreeableness     | FLOAT     |
| neuroticism       | FLOAT     |
| calculated_at     | TIMESTAMP |

---

## behavioral_patterns

Detected behavioral patterns.

| Field        | Type      |
| ------------ | --------- |
| id           | UUID      |
| user_id      | UUID      |
| pattern_type | VARCHAR   |
| confidence   | FLOAT     |
| created_at   | TIMESTAMP |

---

## embeddings

Stores vector embeddings.

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| memory_id  | UUID      |
| vector     | VECTOR    |
| model      | VARCHAR   |
| created_at | TIMESTAMP |

---

## audit_logs

Security and compliance logging.

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| user_id    | UUID      |
| action     | VARCHAR   |
| ip_address | VARCHAR   |
| created_at | TIMESTAMP |

---

# Index Strategy

Create indexes for:

* users(email)
* memories(user_id)
* memories(memory_date)
* personality_traits(user_id)
* behavioral_patterns(user_id)

Vector indexes:

* pgvector cosine similarity
* pgvector HNSW

---

# Migration Order

1. users
2. profiles
3. memories
4. memory_tags
5. memory_relationships
6. timeline_events
7. personality_traits
8. behavioral_patterns
9. embeddings
10. audit_logs

---

# Future Soul Computing Tables

Reserved for future development:

* values
* beliefs
* goals
* decision_history
* identity_graph
* cognitive_snapshots

These tables should not be implemented until RepliCons reaches production maturity.
