CREATE TABLE IF NOT EXISTS projects
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE tasks
(
    id          SERIAL PRIMARY KEY,
    project_id  INT NOT NULL,
    name        VARCHAR(255) NOT NULL,
    description TEXT,
    status      VARCHAR(50),
    due_date    DATE,
    FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS volunteers
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'volunteer'
);

CREATE TABLE project_volunteers
(
    project_id INT NOT NULL,
    volunteer_id    INT NOT NULL,
    role VARCHAR(50) DEFAULT 'volunteer',
    PRIMARY KEY (project_id, volunteer_id),
    FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers (id) ON DELETE CASCADE
);