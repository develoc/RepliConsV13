# API_SPECIFICATION.md

## Purpose

Defines all backend API endpoints for RepliCons.

Base URL:

```text
/api/v1
```

---

# Authentication

## Register

POST

```text
/api/v1/auth/register
```

Request:

```json
{
  "email": "",
  "password": ""
}
```

---

## Login

POST

```text
/api/v1/auth/login
```

Returns:

```json
{
  "accessToken": "",
  "refreshToken": ""
}
```

---

## Refresh Token

POST

```text
/api/v1/auth/refresh
```

---

## Logout

POST

```text
/api/v1/auth/logout
```

---

# Memory Endpoints

## Get All Memories

GET

```text
/api/v1/memories
```

---

## Get Memory

GET

```text
/api/v1/memories/:id
```

---

## Create Memory

POST

```text
/api/v1/memories
```

Example:

```json
{
  "title": "Graduation",
  "description": "University graduation day",
  "emotion": "joy",
  "intensity": 9
}
```

---

## Update Memory

PUT

```text
/api/v1/memories/:id
```

---

## Delete Memory

DELETE

```text
/api/v1/memories/:id
```

---

# Timeline Endpoints

## Get Timeline

GET

```text
/api/v1/timeline
```

---

## Timeline By Year

GET

```text
/api/v1/timeline/:year
```

---

# Personality Engine

## Analyze Personality

POST

```text
/api/v1/personality/analyze
```

Returns:

* Openness
* Conscientiousness
* Extroversion
* Agreeableness
* Neuroticism

---

## Get Personality Profile

GET

```text
/api/v1/personality
```

---

# Behavioral Engine

## Analyze Behavior

POST

```text
/api/v1/behavior/analyze
```

---

## Retrieve Patterns

GET

```text
/api/v1/behavior
```

---

# Semantic Search

## Search Related Memories

POST

```text
/api/v1/search/semantic
```

Request:

```json
{
  "query": "childhood vacation"
}
```

---

# Administration

## Audit Logs

GET

```text
/api/v1/admin/audit
```

Admin only.

---

# Security Requirements

All protected endpoints require:

Authorization Header

```text
Bearer JWT_TOKEN
```

---

# Validation

All requests validated through:

* Zod
* Prisma
* Database constraints

No endpoint should accept raw unvalidated input.

Humans are astonishingly creative at generating malformed payloads.
